import React, { useState } from "react";

const EducationalResources = () => {
  const [score, setScore] = useState(0);
  const lessons = [
    { title: "📊 How to Budget", points: 10 },
    { title: "📈 Investing Basics", points: 15 },
    { title: "💰 SIP vs FD", points: 10 },
  ];

  const completeLesson = (points) => {
    setScore(score + points);
  };

  return (
    <div>
      <h2>📖 Financial Learning</h2>
      {lessons.map((lesson, index) => (
        <div key={index}>
          <h4>{lesson.title}</h4>
          <button onClick={() => completeLesson(lesson.points)}>Complete (+{lesson.points})</button>
        </div>
      ))}
      <h3>Score: {score} points</h3>
    </div>
  );
};

export default EducationalResources;
