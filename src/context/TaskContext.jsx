import { createContext, useContext, useState, useEffect } from "react";
import { tasksAPI } from "../services/tasksAPI";
import { useAuth } from "./AuthContext.jsx";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { isAuth } = useAuth();

  const loadTasks = async () => {
    if (!isAuth) return;

    setLoading(true);
    setError("");
    try {
      const tasksData = await tasksAPI.getTasks();
      setTasks(tasksData);
    } catch (err) {
      setError(err.message || "Ошибка загрузки задач");
    } finally {
      setLoading(false);
    }
  };

  const createTask = async (taskData) => {
    try {
      const updatedTasks = await tasksAPI.createTask(taskData);
      setTasks(updatedTasks);
      return updatedTasks;
    } catch (err) {
      setError(err.message || "Ошибка создания задачи");
      throw err;
    }
  };

  const updateTask = async (id, taskData) => {
    try {
      const updatedTasks = await tasksAPI.updateTask(id, taskData);
      setTasks(updatedTasks);
      return updatedTasks;
    } catch (err) {
      setError(err.message || "Ошибка обновления задачи");
      throw err;
    }
  };

  const deleteTask = async (id) => {
    try {
      const updatedTasks = await tasksAPI.deleteTask(id);
      setTasks(updatedTasks);
      return updatedTasks;
    } catch (err) {
      setError(err.message || "Ошибка удаления задачи");
      throw err;
    }
  };

  useEffect(() => {
    if (isAuth) {
      loadTasks();
    } else {
      setTasks([]);
    }
  }, [isAuth]);

  const value = {
    tasks,
    loading,
    error,
    loadTasks,
    createTask,
    updateTask,
    deleteTask,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};
