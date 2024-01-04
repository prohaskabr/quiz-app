import { useRef } from "react";

export default function Answers({ answers, selectedAnswer, answerState, onSelectAnswere }) {
    const shuffledAnswers = useRef();

    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }

    return (
        <ul id="answers">
            {shuffledAnswers.current.map((a) => {
                let cssClass = '';

                if (selectedAnswer === a) {
                    if (answerState === 'answered') {
                        cssClass = 'selected'
                    }
                    if (answerState === 'correct' || answerState === 'wrong') {
                        cssClass = answerState
                    }
                }

                return (<li key={a} className="answer" >
                    <button onClick={() => onSelectAnswere(a)}
                        className={cssClass}
                        disabled={answerState !== ''}
                    >{a}</button>
                </li>)
            })}
        </ul>
    );
}