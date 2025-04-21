import { useState } from "react";
import React from "react";
import "./DailyRoutine.css";

const routineTemplate = [
  { time: "06:00 - 07:00", task: "Wake up / morning routine" },
  { time: "07:00 - 07:45", task: "Exercise / Walk / Chicken" },
  { time: "07:45 - 08:15", task: "Breakfast" },
  { time: "08:15 - 11:00", task: "💻 Coding Session #1" },
  { time: "11:30 - 13:00", task: "💻 Coding Session #2" },
  { time: "13:00 - 14:00", task: "Lunch + Break" },
  { time: "15:00 - 16:00", task: "Reading / Learning" },
  { time: "17:00 - 18:30", task: "Free Time / Reset" },
  { time: "21:00 - 21:30", task: "Journaling / Plan Next Day" },
];

const DailyRoutine = () => {
  const [checked, setChecked] = useState(routineTemplate.map(() => false));

  const handleCheckbox = (index) => {
    const updated = [...checked];
    updated[index] = !updated[index];
    setChecked(updated);
  };

  return (
    <div className="daily-routine">
      <h2>🧱 Daily Routine</h2>
      <table className="routine-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Activity</th>
            <th>Done?</th>
          </tr>
        </thead>
        <tbody>
          {routineTemplate.map((item, index) => (
            <tr key={index}>
              <td>{item.time}</td>
              <td>{item.task}</td>
              <td>
                <input
                  type="checkbox"
                  checked={checked[index]}
                  onChange={() => handleCheckbox(index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DailyRoutine;
