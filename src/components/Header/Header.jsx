import React, { useState } from "react";
import PopNewCard from "../popups/PopNewCard/PopNewCard";
import PopUser from "../popups/PopUser/PopUser";
import {
  HeaderWrapper,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderButton,
  HeaderUser,
} from "./Header.styled";

function Header() {
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);

  const toggleUserPopup = () => {
    setIsUserPopupOpen(!isUserPopupOpen);
  };

  const closeUserPopup = () => {
    setIsUserPopupOpen(false);
  };

  const handleLogout = () => {
    console.log("Пользователь вышел из системы");
    // Здесь можно добавить логику выхода
    closeUserPopup();
  };

  return (
    <HeaderWrapper>
      <div className="container">
        <HeaderBlock>
          <HeaderLogo>
            <a href="" target="_self">
              <img src="/images/logo.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderNav>
            <PopNewCard />
            <HeaderUser onClick={toggleUserPopup}>Ivan Ivanov</HeaderUser>

            <PopUser
              isOpen={isUserPopupOpen}
              onClose={closeUserPopup}
              onLogout={handleLogout}
            />
          </HeaderNav>
        </HeaderBlock>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
