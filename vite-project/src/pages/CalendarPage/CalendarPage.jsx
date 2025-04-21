import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigate = useNavigate();

  const handleDateClick = (date) => {
    const formatted = date.toISOString().split("T")[0]; // "YYYY-MM-DD"
    navigate(`/day/${formatted}`);
  };

  return (
    <div className="calendar-container">
      <h1>🗓️ My Daily Routine</h1>
      <Calendar
        onChange={handleDateClick}
        value={selectedDate}
        locale="en-US"
      />
    </div>
  );
};

export default CalendarPage;
