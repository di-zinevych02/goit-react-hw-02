import { useState, useEffect } from "react";
import Description from "./components/Description/Description"
import Options from "./components/Options/Options"
import Feedback from "./components/Feedback/Feedback"

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    //// Зчитуємо значення за ключем
    const savedFeedback = localStorage.getItem("feedback");
    //Якщо на момент завантаження додатка в локальному сховищі нічого не збережено, стан повинен ініціалізуватися нулями.
    return savedFeedback ? JSON.parse(savedFeedback) : {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);
  
  const updateFeedback = feedbackType => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback, [feedbackType]: prevFeedback[feedbackType] + 1
    }));
  };

const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
};
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveReviews = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;
  return (
    <>
      <Description />
      <Options onLeaveFeedback={updateFeedback} onReset={resetFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
      <Feedback {...feedback} total={totalFeedback} positiveReviews={positiveReviews} />  
      ) : (
          <div>
            <p>No feedback given yet</p>
            </div>
      )}
    </>
  );
};

export default App
