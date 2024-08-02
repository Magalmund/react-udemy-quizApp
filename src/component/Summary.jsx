import React from 'react';
import quizComplete from "../assets/quiz-complete.png";
import QUESTIONS from "../constants/questions.js";
import {v4 as uuidv4} from "uuid";

const Summary = ({userAnswers}) => {

    const skippedAnswers = userAnswers.filter((answer) => answer === null);
    const correctAnswers = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0]);

    const skippedAnswersResult = Math.round((skippedAnswers.length / userAnswers.length) * 100);
    const correctAnswersResult = Math.round((correctAnswers.length / userAnswers.length) * 100);
    const wrongAnswersResult = 100 - skippedAnswersResult - correctAnswersResult;


    return (
        <div id="summary">
            <img src={quizComplete} alt="Quiz complete"/>
            <h2>Quiz Completed!</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{skippedAnswersResult}%</span>
                    <span className="text">skipped</span>
                </p>
                <p>
                    <span className="number">{correctAnswersResult}%</span>
                    <span className="text">answered correctly</span>
                </p>
                <p>
                    <span className="number">{wrongAnswersResult}%</span>
                    <span className="text">answered incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) => {

                    let cssClass = "user-answer";

                    if(answer === null) {
                        cssClass += " skipped";
                    } else if (answer === QUESTIONS[index].answers[0]) {
                        cssClass += " correct";
                    } else {
                        cssClass += " wrong"
                    }

                    return (
                        <li key={uuidv4()}>
                            <h3>{index + 1}</h3>
                            <p className="question">{QUESTIONS[index].text}</p>
                            <p className={cssClass}>{answer ?? 'Skipped'}</p>
                        </li>
                    )
                })}

            </ol>
        </div>
    );
};

export default Summary;
