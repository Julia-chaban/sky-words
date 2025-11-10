import { createContext, useContext, useState, useEffect } from "react";
import { tasksAPI } from "../services/tasksAPI";
import { useAuth } from "./AuthContext";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { isAuth } = useAuth();

  const loadTasks = async () => {
    if (!isAuth) {
      console.log("Не авторизован, пропускаем загрузку задач");
      return;
    }

    setLoading(true);
    setError("");
    try {
      console.log("Начинаем загрузку задач...");
      const tasksData = await tasksAPI.getTasks();
      console.log("Задачи загружены:", tasksData);
      setTasks(tasksData);
    } catch (err) {
      console.error("Ошибка загрузки задач:", err);
      setError(err.message || "Ошибка загрузки задач");
    } finally {
      setLoading(false);
    }
  };

  const createTask = async (taskData) => {
    try {
      // Создаем задачу на сервере
      const updatedTasks = await tasksAPI.createTask(taskData);
      // Обновляем состояние без дополнительного GET запроса
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
    console.log("TaskContext useEffect - isAuth:", isAuth);
    if (isAuth) {
      console.log("Загружаем задачи...");
      loadTasks();
    } else {
      console.log("Пользователь не авторизован, очищаем задачи");
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
