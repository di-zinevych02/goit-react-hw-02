import { useState, useEffect } from "react";
import Description from "./components/Description/Description"
import Options from "./components/Options/Options"
import Feedback from "./components/Feedback/Feedback"

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback ? JSON.parse(savedFeedback) : {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  
  const updateFeedback = feedbackType => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback, [feedbackType]: prevFeedback[feedbackType] + 1
    }));
  };

const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
};
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;
  return (
    <>
      <Description />
      <Options />
      <Feedback />
    </>
  );
  //  const [clicks, setClicks] = useState(() => {
  //     const savedClicks = window.localStorage.getItem("saved-clicks");
  //     if (savedClicks !== null) {
  //       return Number(savedClicks);
  //     }
  //     return 0;
  //   });

  //   useEffect(() => {
  //     window.localStorage.setItem("saved-clicks", clicks);
  //   }, [clicks]);

  //   return (
  //     <div>
  //       <button onClick={() => setClicks(clicks + 1)}>
  //         You clicked {clicks} times
  //       </button>
  //       <button onClick={() => setClicks(0)}>Reset</button>
  //     </div>
  //   );
};

export default App
