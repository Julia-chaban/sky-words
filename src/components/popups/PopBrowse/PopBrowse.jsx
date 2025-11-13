import React, { useState } from "react";
import { useTasks } from "../../../context/TaskContext";
import {
  PopupWrapper,
  PopupContainer,
  PopupBlock,
  PopupContent,
  PopupTitle,
  PopupClose,
  PopupWrap,
  PopupForm,
  FormBlock,
  FormInput,
  FormTextarea,
  FormButton,
  Subtitle,
  ButtonGroup,
  DeleteButton,
} from "./PopBrowse.styled";

function PopBrowse({ isOpen, onClose, title, cardId, task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { updateTask, deleteTask } = useTasks();

  const [formData, setFormData] = useState({
    title: task?.title || "",
    topic: task?.topic || "Research",
    status: task?.status || "Без статуса",
    description: task?.description || "",
    date: task?.date
      ? new Date(task.date).toISOString().split("T")[0]
      : new Date().toISOString().split("T")[0],
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData({
      title: task?.title || "",
      topic: task?.topic || "Research",
      status: task?.status || "Без статуса",
      description: task?.description || "",
      date: task?.date
        ? new Date(task.date).toISOString().split("T")[0]
        : new Date().toISOString().split("T")[0],
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (!formData.title.trim()) {
        throw new Error("Название задачи обязательно");
      }

      if (formData.title.trim().length === 0) {
        throw new Error("Название не может содержать только пробелы");
      }

      if (!formData.topic) {
        throw new Error("Тема обязательна для выбора");
      }

      if (!formData.status) {
        throw new Error("Статус обязателен для выбора");
      }

      if (!formData.date) {
        throw new Error("Дата обязательна для заполнения");
      }

      await updateTask(cardId, formData);
      setIsEditing(false);
      onClose();
    } catch (err) {
      setError(err.message || "Ошибка обновления задачи");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    setLoading(true);
    setError("");

    try {
      await deleteTask(cardId);
      onClose();
    } catch (err) {
      setError(err.message || "Ошибка удаления задачи");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PopupWrapper $isOpen={isOpen}>
      <PopupContainer onClick={onClose}>
        <PopupBlock onClick={(e) => e.stopPropagation()}>
          <PopupContent>
            <PopupTitle>
              {isEditing ? "Редактирование задачи" : title}
            </PopupTitle>
            <PopupClose onClick={onClose}>✖</PopupClose>
            <PopupWrap>
              {error && (
                <div
                  style={{
                    color: "red",
                    backgroundColor: "#ffe6e6",
                    padding: "10px",
                    borderRadius: "4px",
                    marginBottom: "15px",
                  }}
                >
                  {error}
                </div>
              )}

              {isEditing ? (
                <PopupForm onSubmit={handleSubmit}>
                  <FormBlock>
                    <Subtitle>Название задачи</Subtitle>
                    <FormInput
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Введите название задачи..."
                      required
                      disabled={loading}
                    />
                  </FormBlock>

                  <FormBlock>
                    <Subtitle>Тема</Subtitle>
                    <select
                      name="topic"
                      value={formData.topic}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "14px",
                        background: "transparent",
                        border: "0.7px solid rgba(148, 166, 190, 0.4)",
                        borderRadius: "8px",
                        fontSize: "14px",
                        lineHeight: "1",
                        letterSpacing: "-0.14px",
                        color: "#ffffff",
                        margin: "10px 0",
                      }}
                      disabled={loading}
                    >
                      <option value="Research">Research</option>
                      <option value="Design">Design</option>
                      <option value="Content">Content</option>
                    </select>
                  </FormBlock>

                  <FormBlock>
                    <Subtitle>Статус</Subtitle>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "14px",
                        background: "transparent",
                        border: "0.7px solid rgba(148, 166, 190, 0.4)",
                        borderRadius: "8px",
                        fontSize: "14px",
                        lineHeight: "1",
                        letterSpacing: "-0.14px",
                        color: "#ffffff",
                        margin: "10px 0",
                      }}
                      disabled={loading}
                    >
                      <option value="Без статуса">Без статуса</option>
                      <option value="Нужно сделать">Нужно сделать</option>
                      <option value="В работе">В работе</option>
                      <option value="Тестирование">Тестирование</option>
                      <option value="Готово">Готово</option>
                    </select>
                  </FormBlock>

                  <FormBlock>
                    <Subtitle>Описание задачи</Subtitle>
                    <FormTextarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Введите описание задачи..."
                      disabled={loading}
                    />
                  </FormBlock>

                  <FormBlock>
                    <Subtitle>Дата</Subtitle>
                    <FormInput
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      disabled={loading}
                    />
                  </FormBlock>

                  <ButtonGroup>
                    <FormButton type="submit" disabled={loading}>
                      {loading ? "Сохранение..." : "Сохранить"}
                    </FormButton>
                    <FormButton
                      type="button"
                      onClick={handleCancel}
                      disabled={loading}
                    >
                      Отмена
                    </FormButton>
                  </ButtonGroup>
                </PopupForm>
              ) : (
                <div>
                  <FormBlock>
                    <Subtitle>Описание</Subtitle>
                    <p
                      style={{
                        color: "#ffffff",
                        margin: "10px 0",
                        lineHeight: "1.5",
                      }}
                    >
                      {task?.description || "Описание отсутствует"}
                    </p>
                  </FormBlock>

                  <FormBlock>
                    <Subtitle>Тема</Subtitle>
                    <p style={{ color: "#ffffff", margin: "10px 0" }}>
                      {task?.topic || "Не указана"}
                    </p>
                  </FormBlock>

                  <FormBlock>
                    <Subtitle>Статус</Subtitle>
                    <p style={{ color: "#ffffff", margin: "10px 0" }}>
                      {task?.status || "Не указан"}
                    </p>
                  </FormBlock>

                  <FormBlock>
                    <Subtitle>Дата</Subtitle>
                    <p style={{ color: "#ffffff", margin: "10px 0" }}>
                      {task?.date
                        ? new Date(task.date).toLocaleDateString("ru-RU")
                        : "Не указана"}
                    </p>
                  </FormBlock>

                  <ButtonGroup>
                    <FormButton type="button" onClick={handleEdit}>
                      Редактировать
                    </FormButton>
                    <DeleteButton
                      type="button"
                      onClick={handleDelete}
                      disabled={loading}
                    >
                      {loading ? "Удаление..." : "Удалить"}
                    </DeleteButton>
                  </ButtonGroup>
                </div>
              )}
            </PopupWrap>
          </PopupContent>
        </PopupBlock>
      </PopupContainer>
    </PopupWrapper>
  );
}

export default PopBrowse;
