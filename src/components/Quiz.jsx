import { useState, useCallback } from "react"
import DATA from '../questions.js'
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

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
        return (<Summary userAnswers={userAnswers} />)
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