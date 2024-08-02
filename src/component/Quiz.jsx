import React, {useCallback, useState} from 'react';
import QUESTIONS from '../constants/questions';
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";


const Quiz = () => {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback((selectedAnswer) => {
        setUserAnswers(prevState => ([...prevState, selectedAnswer]));
    }, []);

    const handleSkipSelectAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if (quizIsComplete) {
        return <Summary userAnswers={userAnswers} />
    }

    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelectAnswers={handleSelectAnswer}
                onSkipAnswer={handleSkipSelectAnswer}
            />
        </div>
    );
};

export default Quiz;
