import React, { useEffect, useState } from "react";
import "./ToDoList.css";

const TodoList = ({ date }) => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const storageKey = `todo-${date}`;

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) setTasks(JSON.parse(saved));
  }, [date]);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input.trim() === "") return;
    const newTasks = [...tasks, { text: input, done: false }];
    setTasks(newTasks);
    setInput("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  return (
    <div className="todo-list">
      <h2>📝 To-Do List</h2>
      <div className="todo-input">
        <input
          type="text"
          placeholder="Add task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="todo-items">
        {tasks.map((task, index) => (
          <li key={index} className={task.done ? "done" : ""}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(index)}
            />
            <span>{task.text}</span>
            <button onClick={() => deleteTask(index)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
