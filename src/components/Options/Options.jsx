

export default function Options({ updateFeedback }) {
    return (
        <div>
            <ul>
            <li><button onCLick={() => updateFeedback("good")}>Good</button></li>
            <li><button onCLick={() => updateFeedback("neutral")}>Neutral</button></li>
            <li><button onCLick={() => updateFeedback("bad")}>Bad</button></li>
            </ul>
        </div>
    );
}