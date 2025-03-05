export default function Feedback() {
    return (
        <div>
            <ul>
                <li><p>Good: {values.good}</p></li>
                <li><p>Neutral: {values.neutral}</p></li>
                <li><p>Bad: {values.bad}</p></li>
            </ul>
        </div>
    );
}