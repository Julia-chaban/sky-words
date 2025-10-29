import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import { MainWrapper } from "./MainPage.styled";
import { useAuth } from "../../context/AuthContext.jsx";
import { useState, useEffect } from "react";
import { tasksAPI } from "../../services/tasksAPI";

function MainPage() {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadTasks = async () => {
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

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <MainWrapper>
      <Header onTaskCreated={loadTasks} />
      <Main tasks={tasks} loading={loading} error={error} />
    </MainWrapper>
  );
}

export default MainPage;
