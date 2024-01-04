import quizFinished from '../assets/quiz-complete.png'
import DATA from '../questions.js'
import Answers from './Answers';

export default function Summary({ userAnswers }) {

    const skippedAnswers = userAnswers.filter(a => a === null).length;
    const correctAnswers = userAnswers.filter((a, i) => a === DATA[i].answers[0]).length;
    const wrongAnswers = userAnswers.filter((a, i) => a !== null && a !== DATA[i].answers[0]).length;

    function getShare(value) {
        return Math.round((value / userAnswers.length) * 100);
    }

    return (
        <div id="summary">
            <img src={quizFinished} alt="Trophy" />
            <h2>Quiz Completed!</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{getShare(skippedAnswers)}%</span>
                    <span className="text">skipped</span>
                </p>
                <p>
                    <span className="number">{getShare(correctAnswers)}%</span>
                    <span className="text">answered correctly</span>
                </p>
                <p>
                    <span className="number">{getShare(wrongAnswers)}%</span>
                    <span className="text">answered incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((a, i) => {
                    let cssClass = 'user-answer';

                    if (a === null)
                        cssClass += ' skipped';
                    else if (a === DATA[i].answers[0])
                        cssClass += ' correct';
                    else
                        cssClass += ' wrong';

                    return (
                        <li key={i}>
                            <h3>{i + 1}</h3>
                            <p className='question'>{DATA[i].text}</p>
                            <p className={cssClass}>{a ?? 'Skipped'}</p>
                        </li>);
                })}
            </ol>
        </div>)
}