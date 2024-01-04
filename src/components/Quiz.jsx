import { useState, useCallback } from "react"
import DATA from '../questions.js'
import quizFinished from '../assets/quiz-complete.png'
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const currentQuestionIndex = userAnswers.length;
    const shuffledAnswers = [...DATA[currentQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);
    const isFinished = currentQuestionIndex === DATA.length - 1;



    const handleSelectAnswer = useCallback(function handleAnswer(selectedAnswer) {
        console.log(DATA[currentQuestionIndex].answers[0] === selectedAnswer);
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
            <div id="question">
                <QuestionTimer key={currentQuestionIndex} timeout={10000} onTimeout={handleSkipAnswer} />
                <h2>{DATA[currentQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map((a) => (
                        <li key={a} className="answer" >
                            <button onClick={() => handleSelectAnswer(a)}>{a}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}