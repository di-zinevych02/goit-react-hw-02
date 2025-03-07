
import css from "./Feedback.module.css"
export default function Feedback({good, neutral, bad, total, positiveReviews}) {
    return (
        <div>
            <ul className={css.feedback}>
                <li><p>Good: {good}</p></li>
                <li><p>Neutral: {neutral}</p></li>
                <li><p>Bad: {bad}</p></li>
                <li><p>Total: {total}</p></li>
                <li><p>Positive feedback: {positiveReviews}%</p></li>
            </ul>
        </div>
    );
}