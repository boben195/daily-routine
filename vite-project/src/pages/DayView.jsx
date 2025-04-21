import { useParams } from "react-router-dom";
import React from "react";

const DayView = () => {
  const { date } = useParams();

  return (
    <div className="day-tasks">
      <h1>Tasks for {date}</h1>
      {/* Later: Load tasks from localStorage or database */}
      <ul>
        <li>🧘 Morning stretch</li>
        <li>💻 2 hours coding</li>
        <li>🍽️ Healthy lunch</li>
      </ul>
    </div>
  );
};

export default DayView;
