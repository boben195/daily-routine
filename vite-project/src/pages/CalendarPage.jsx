import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="calendar-container">
      <h1>🗓️ My Daily Routine</h1>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        locale="en-US"
      />
      <div className="day-details">
        <h2>Selected: {selectedDate.toDateString()}</h2>
      </div>
    </div>
  );
};

export default CalendarPage;
