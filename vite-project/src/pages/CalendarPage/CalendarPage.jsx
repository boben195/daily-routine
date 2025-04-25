import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";
import "./CalendarPage.css";
import Starfield from "../../components/Starfield/Starfield";

const formatDateLocal = (dateObj) => {
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigate = useNavigate();

  const handleDateClick = (date) => {
    const formatted = formatDateLocal(date);
    navigate(`/day/${formatted}`);
  };

  return (
    <div className="calendar-container">
      <Starfield />
      <h1>🗓️ My Daily Routine</h1>
      <Calendar
        onChange={(date) => {
          setSelectedDate(date);
          handleDateClick(date);
        }}
        value={selectedDate}
        locale="en-US"
      />
    </div>
  );
};

export default CalendarPage;
