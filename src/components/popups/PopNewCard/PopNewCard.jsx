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
  FormCreateButton,
  Subtitle,
} from "./PopNewCard.styled";

function PopNewCard({ onTaskCreated }) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { createTask } = useTasks();

  const [formData, setFormData] = useState({
    title: "",
    topic: "Research",
    status: "Без статуса",
    description: "",
    date: new Date().toISOString().split("T")[0],
  });

  const openPopup = () => setIsOpen(true);

  const closePopup = () => {
    setIsOpen(false);
    setError("");
    setFormData({
      title: "",
      topic: "Research",
      status: "Без статуса",
      description: "",
      date: new Date().toISOString().split("T")[0],
    });
  };

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

      await createTask(formData);
      closePopup();

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
    <>
      <button
        onClick={openPopup}
        style={{
          width: "178px",
          height: "30px",
          borderRadius: "4px",
          backgroundColor: "#565EEF",
          color: "#FFFFFF",
          border: "none",
          fontSize: "14px",
          fontWeight: "500",
          cursor: "pointer",
          margin: "10px",
        }}
      >
        Создать новую задачу
      </button>

      <PopupWrapper $isOpen={isOpen}>
        <PopupContainer onClick={closePopup}>
          <PopupBlock onClick={(e) => e.stopPropagation()}>
            <PopupContent>
              <PopupTitle>Создание задачи</PopupTitle>
              <PopupClose onClick={closePopup}>✖</PopupClose>
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
                        margin: "20px 0",
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
                        margin: "20px 0",
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

                  <FormCreateButton type="submit" disabled={loading}>
                    {loading ? "Создание..." : "Создать задачу"}
                  </FormCreateButton>
                </PopupForm>
              </PopupWrap>
            </PopupContent>
          </PopupBlock>
        </PopupContainer>
      </PopupWrapper>
    </>
  );
}

export default PopNewCard;
