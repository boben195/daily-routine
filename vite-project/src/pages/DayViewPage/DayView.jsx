import { useParams } from "react-router-dom";
import React from "react";
import DailyRoutine from "../../components/DailyRoutine/DailyRoutine";
import TodoList from "../../components/ToDoList/ToDoList";
import ExpenseTable from "../../components/Expence/ExpenseTable";

import "./DayView.css";

const DayView = () => {
  const { date } = useParams();

  const safeDate = decodeURIComponent(date);
  return (
    <div className="day-tasks">
      <h1 className="day-title">Tasks for {safeDate}</h1>
      <div className="day-layout">
        <div className="left-column">
          <DailyRoutine />
        </div>
        <div className="right-column">
          <div className="todo-wrapper">
            <TodoList date={safeDate} />
          </div>
          <div className="expense-wrapper">
            <ExpenseTable date={safeDate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayView;
