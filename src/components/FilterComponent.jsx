import { Component } from "react";
import "./FilterComponent.css";

export default class FilterComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            randomWords: [
                'view',
                'bishop',
                'pudding',
                'wilderness',
                'obligation',
                'option',
                'average',
                'sheep',
                'orientation',
                'pier',
                'clique',
                'orange',
                'art',
                'shot',
                'freight',
                'cow',
                'formal',
                'operation',
                'deter',
                'horizon'
            ],
            currentWords: [
                'view',
                'bishop',
                'pudding',
                'wilderness',
                'obligation',
                'option',
                'average',
                'sheep',
                'orientation',
                'pier',
                'clique',
                'orange',
                'art',
                'shot',
                'freight',
                'cow',
                'formal',
                'operation',
                'deter',
                'horizon'],
        };
    }

    filterButtonHandler(letterFilter) {
        const { randomWords } = this.state;

        let filteredWordList = randomWords.map(word => {
            const lowerCaseWord = word.toLowerCase();

            if (!lowerCaseWord.includes(letterFilter)) {
                return lowerCaseWord;
            }
        });

        this.setState({ currentWords: filteredWordList });
    }

    resetButtonHandler() {
        this.setState({ currentWords: this.state.randomWords });
    }

    render() {

        const { currentWords } = this.state;

        const wordList = currentWords.map(word => {
            //Doing this to elimate blank <p> tags being made from there being nulls in the array
            if (word) {
                return <p>{word}</p>
            }
        });

        return (
            <div className="filterContainer">
                <div className="filterButtons">
                    <button className="filterButton" onClick={() => this.filterButtonHandler('u')}>U</button>
                    <button className="filterButton" onClick={() => this.filterButtonHandler('t')}>T</button>
                    <button className="filterButton" onClick={() => this.filterButtonHandler('o')}>O</button>
                    <button id="resetButton" onClick={() => this.resetButtonHandler()}>Reset</button>
                </div>
                {wordList}
            </div>

        );
    }
}