import React, { useState } from "react";
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

function PopNewCard() {
  const [isOpen, setIsOpen] = useState(false);

  // Функция для открытия попапа
  const openPopup = () => setIsOpen(true);

  // Функция для закрытия попапа
  const closePopup = () => setIsOpen(false);

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    // Логика создания задачи
    closePopup();
  };

  return (
    <>
      {/* Кнопка для открытия попапа */}
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

      {/* Модальное окно */}
      <PopupWrapper isOpen={isOpen}>
        <PopupContainer onClick={closePopup}>
          <PopupBlock onClick={(e) => e.stopPropagation()}>
            <PopupContent>
              <PopupTitle>Создание задачи</PopupTitle>
              <PopupClose onClick={closePopup}>✖</PopupClose>
              <PopupWrap>
                <PopupForm id="formNewCard" onSubmit={handleSubmit}>
                  <FormBlock>
                    <Subtitle>Название задачи</Subtitle>
                    <FormInput
                      type="text"
                      name="name"
                      id="formTitle"
                      placeholder="Введите название задачи..."
                      autoFocus
                      required
                    />
                  </FormBlock>
                  <FormBlock>
                    <Subtitle>Описание задачи</Subtitle>
                    <FormTextarea
                      name="text"
                      id="textArea"
                      placeholder="Введите описание задачи..."
                      required
                    />
                  </FormBlock>
                  <FormCreateButton type="submit">
                    Создать задачу
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
