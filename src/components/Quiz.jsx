import { useState, useCallback, useRef } from "react"
import DATA from '../questions.js'
import quizFinished from '../assets/quiz-complete.png'

import Question from "./Question.jsx";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const [answerState, setAnswereState] = useState('');
    const currentQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1;
    const isFinished = currentQuestionIndex === DATA.length - 1;

    const handleSelectAnswer = useCallback(function handleAnswer(selectedAnswer) {
        setAnswereState('answered');

        setUserAnswers(prev => {
            return [...prev, selectedAnswer]
        });

        setTimeout(() => {
            if (DATA[currentQuestionIndex].answers[0] === selectedAnswer) {
                setAnswereState('correct');
                console.log('correct')
            }
            else {
                setAnswereState('wrong');
                console.log('wonrg')
            }



            setTimeout(() => {
                setAnswereState('')
            }, 2000);
        }, 1000);

    }, [currentQuestionIndex]);

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
                text={DATA[currentQuestionIndex].text}
                answers={DATA[currentQuestionIndex].answers}
                onSelectAnswer={handleSelectAnswer}
                selectedAnswer={userAnswers[userAnswers.length - 1]}
                answerState={answerState}
                onSkipAnswer={handleSkipAnswer} />
        </div>
    )
}