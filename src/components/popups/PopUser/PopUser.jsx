import React, { useState } from "react";
import {
  PopupWrapper,
  UserName,
  UserEmail,
  ThemeSection,
  ThemeText,
  ThemeToggle,
  LogoutButton,
} from "./PopUser.styled";

function PopUser({ isOpen, onClose, onLogout }) {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);
    // Здесь можно добавить логику смены темы
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    if (onClose) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <PopupWrapper isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
      <UserName>Ivan Ivanov</UserName>
      <UserEmail>ivan.ivanov@gmail.com</UserEmail>

      <ThemeSection>
        <ThemeText>Темная тема</ThemeText>
        <ThemeToggle checked={isDarkTheme} onChange={handleThemeToggle} />
      </ThemeSection>

      <LogoutButton onClick={handleLogout}>Выйти</LogoutButton>
    </PopupWrapper>
  );
}

export default PopUser;
