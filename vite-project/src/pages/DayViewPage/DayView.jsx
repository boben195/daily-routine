import { useParams } from "react-router-dom";
import React from "react";
import DailyRoutine from "../../components/DailyRoutine/DailyRoutine";
import TodoList from "../../components/ToDoList/ToDoList";

const DayView = () => {
  const { date } = useParams();

  const safeDate = decodeURIComponent(date);
  return (
    <div className="day-tasks">
      <h1>Tasks for {date}</h1>
      {/* Later: Load tasks from localStorage or database */}
      <DailyRoutine />
      <TodoList date={safeDate} />
    </div>
  );
};

export default DayView;
