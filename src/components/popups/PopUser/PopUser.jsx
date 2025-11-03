import React from "react";
import {
  PopupWrapper,
  PopupContainer,
  PopupBlock,
  PopupUser,
  UserName,
  UserMail,
  UserTheme,
  PopupClose,
  ThemeSubtitle,
  ThemeCheckbox,
} from "./PopUser.styled";

function PopUser({ isOpen, onClose, onLogout, user, taskCount }) {
  return (
    <PopupWrapper $isOpen={isOpen}>
      <PopupContainer onClick={onClose}>
        <PopupBlock onClick={(e) => e.stopPropagation()}>
          <PopupUser>
            <UserName>{user?.name || "Пользователь"}</UserName>
            <UserMail>{user?.login || "user@example.com"}</UserMail>
            <UserTheme>
              <ThemeSubtitle>Темная тема</ThemeSubtitle>
              <ThemeCheckbox type="checkbox" />
            </UserTheme>
            <button
              onClick={onLogout}
              style={{
                width: "100%",
                height: "30px",
                borderRadius: "4px",
                backgroundColor: "transparent",
                color: "#565EEF",
                border: "1px solid #565EEF",
                fontSize: "14px",
                fontWeight: "500",
                cursor: "pointer",
                marginTop: "20px",
              }}
            >
              Выйти
            </button>
          </PopupUser>
          <PopupClose onClick={onClose}>✖</PopupClose>
        </PopupBlock>
      </PopupContainer>
    </PopupWrapper>
  );
}

export default PopUser;
