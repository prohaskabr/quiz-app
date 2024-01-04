import { useState, useCallback, useRef } from "react"
import DATA from '../questions.js'
import quizFinished from '../assets/quiz-complete.png'

import Question from "./Question.jsx";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const [answerState, setAnswereState] = useState('');
    const currentQuestionIndex = userAnswers.length;
    const isFinished = currentQuestionIndex === DATA.length - 1;

    const handleSelectAnswer = useCallback(function handleAnswer(selectedAnswer) {
        setUserAnswers(prev => {
            return [...prev, selectedAnswer]
        });
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if (isFinished) {
        return (<div id="summary">
            <img src={quizFinished} alt="Trophy" />
            <h2>Quiz Completed!</h2>
        </div>)
    }

    return (
        <div id="quiz">
            <Question key={currentQuestionIndex}
                index={currentQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer} />
        </div>
    )
}