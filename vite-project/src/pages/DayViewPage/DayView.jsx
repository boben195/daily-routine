import { useParams } from "react-router-dom";
import React from "react";
import DailyRoutine from "../../components/DailyRoutine/DailyRoutine";

const DayView = () => {
  const { date } = useParams();

  return (
    <div className="day-tasks">
      <h1>Tasks for {date}</h1>
      {/* Later: Load tasks from localStorage or database */}
      <DailyRoutine />
    </div>
  );
};

export default DayView;
