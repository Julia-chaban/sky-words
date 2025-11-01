import { useState } from "react";
import { tasksAPI } from "../../services/tasksAPI";

function CreateTask({ onTaskCreated }) {
  const [formData, setFormData] = useState({
    title: "",
    topic: "Research",
    status: "Без статуса",
    description: "",
    date: new Date().toISOString().split("T")[0],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await tasksAPI.createTask(formData);
      setFormData({
        title: "",
        topic: "Research",
        status: "Без статуса",
        description: "",
        date: new Date().toISOString().split("T")[0],
      });
      if (onTaskCreated) {
        onTaskCreated();
      }
    } catch (err) {
      setError(err.message || "Ошибка создания задачи");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "20px", margin: "20px 0" }}
    >
      <h3>Создать новую задачу</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Название:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Тема:</label>
          <select name="topic" value={formData.topic} onChange={handleChange}>
            <option value="Research">Research</option>
            <option value="Design">Design</option>
            <option value="Content">Content</option>
          </select>
        </div>
        <div>
          <label>Статус:</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="Без статуса">Без статуса</option>
            <option value="Нужно сделать">Нужно сделать</option>
            <option value="В работе">В работе</option>
            <option value="Тестирование">Тестирование</option>
            <option value="Готово">Готово</option>
          </select>
        </div>
        <div>
          <label>Описание:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
          />
        </div>
        <div>
          <label>Дата:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Создание..." : "Создать задачу"}
        </button>
      </form>
    </div>
  );
}

export default CreateTask;
