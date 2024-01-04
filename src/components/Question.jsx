import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";

export default function Question({ text, answers, onSelectAnswer, selectedAnswer, answerState, onSkipAnswer }) {
    return (
        <div id="question">
            <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
            <h2>{text}</h2>
            <Answers
                answers={answers}
                selectedAnswer={selectedAnswer}
                answerState={answerState}
                onSelectAnswere={onSelectAnswer} />
        </div>)
}