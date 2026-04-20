import React from "react";
import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export function TaskContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(),text, isCompleted: false }]);
  };
  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, isCompleted: !t.isCompleted } : t,
      ),
    );
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };
  return (
    <TaskContext.Provider
      value={{ addTask, toggleTask, deleteTask, tasks, setTasks }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export const useTask = () => {
  return useContext(TaskContext);
}
