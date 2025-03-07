
import css from "./Options.module.css"
export default function Options({ onLeaveFeedback, onReset, totalFeedback }) {
    return (
        <div>
            <ul className = {css.options}>
            <li><button onClick={() => onLeaveFeedback("good")}>Good</button></li>
            <li><button onClick={() => onLeaveFeedback("neutral")}>Neutral</button></li>
                <li><button onClick={() => onLeaveFeedback("bad")}>Bad</button></li>
                {totalFeedback > 0 && <li><button onClick={onReset}>Reset</button></li>}
            </ul>
        </div>
    );
}