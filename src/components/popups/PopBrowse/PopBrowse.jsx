import React from "react";
import {
  PopupWrapper,
  PopupContainer,
  PopupBlock,
  PopupContent,
  PopupTopBlock,
  PopupTitle,
  ThemeBadge,
  StatusSection,
  StatusTitle,
  StatusThemes,
  StatusTheme,
  PopupWrap,
  PopupForm,
  FormBlock,
  FormTextarea,
  PopupClose,
  ButtonGroup,
  Button,
} from "./PopBrowse.styled";

function PopBrowse({ isOpen, onClose, title = "Название задачи" }) {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <PopupWrapper isOpen={isOpen} onClick={handleOverlayClick}>
      <PopupContainer>
        <PopupBlock onClick={(e) => e.stopPropagation()}>
          <PopupContent>
            <PopupTopBlock>
              <PopupTitle>{title}</PopupTitle>
              <ThemeBadge theme="orange">
                <p>Web Design</p>
              </ThemeBadge>
            </PopupTopBlock>

            <StatusSection>
              <StatusTitle>Статус</StatusTitle>
              <StatusThemes>
                <StatusTheme className="_hide">
                  <p>Без статуса</p>
                </StatusTheme>
                <StatusTheme className="_gray">
                  <p>Нужно сделать</p>
                </StatusTheme>
                <StatusTheme className="_hide">
                  <p>В работе</p>
                </StatusTheme>
                <StatusTheme className="_hide">
                  <p>Тестирование</p>
                </StatusTheme>
                <StatusTheme className="_hide">
                  <p>Готово</p>
                </StatusTheme>
              </StatusThemes>
            </StatusSection>

            <PopupWrap>
              <PopupForm id="formBrowseCard" action="#">
                <FormBlock>
                  <StatusTitle>Описание задачи</StatusTitle>
                  <FormTextarea
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                  />
                </FormBlock>
              </PopupForm>
              {/* Calendar component would go here */}
            </PopupWrap>

            <ButtonGroup>
              <div style={{ display: "flex", gap: "8px" }}>
                <Button variant="border">Редактировать задачу</Button>
                <Button variant="border">Удалить задачу</Button>
              </div>
              <Button variant="background" onClick={onClose}>
                Закрыть
              </Button>
            </ButtonGroup>

            <PopupClose onClick={onClose}>✖</PopupClose>
          </PopupContent>
        </PopupBlock>
      </PopupContainer>
    </PopupWrapper>
  );
}

export default PopBrowse;
