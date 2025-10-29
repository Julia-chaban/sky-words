import { useState, useEffect } from "react";
import { tasksAPI } from "../../services/tasksAPI";

function TaskList() {
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

  const handleDeleteTask = async (taskId) => {
    try {
      const updatedTasks = await tasksAPI.deleteTask(taskId);
      setTasks(updatedTasks);
    } catch (err) {
      setError(err.message || "Ошибка удаления задачи");
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  if (loading) return <div>Загрузка задач...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div>
      <h2>Мои задачи</h2>
      {tasks.length === 0 ? (
        <p>Задач пока нет</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task._id}
            style={{
              border: "1px solid #ccc",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h3>{task.title}</h3>
            <p>
              <strong>Тема:</strong> {task.topic}
            </p>
            <p>
              <strong>Статус:</strong> {task.status}
            </p>
            <p>
              <strong>Дата:</strong> {new Date(task.date).toLocaleDateString()}
            </p>
            <p>{task.description}</p>
            <button onClick={() => handleDeleteTask(task._id)}>Удалить</button>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;
