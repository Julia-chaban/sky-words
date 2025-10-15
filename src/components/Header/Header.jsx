import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HeaderWrapper,
  HeaderContainer,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderButton,
  UserButton,
  UserPopup,
  UserName,
  UserEmail,
  ThemeToggle,
  LogoutButton,
} from "./Header.styled";

function Header() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleUserClick = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderBlock>
          <HeaderLogo>
            <Link to="/">
              <img src="/images/logo.png" alt="Sky Words" />
            </Link>
          </HeaderLogo>
          <HeaderNav>
            <HeaderButton>Создать новую задачу</HeaderButton>
            <UserButton onClick={handleUserClick}>Ivan Ivanov</UserButton>
            <UserPopup isOpen={isUserMenuOpen}>
              <UserName>Ivan Ivanov</UserName>
              <UserEmail>ivan.ivanov@gmail.com</UserEmail>
              <ThemeToggle>
                <p>Темная тема</p>
                <input type="checkbox" name="checkbox" />
              </ThemeToggle>
              <LogoutButton>
                <Link to="/signin">Выйти</Link>
              </LogoutButton>
            </UserPopup>
          </HeaderNav>
        </HeaderBlock>
      </HeaderContainer>
    </HeaderWrapper>
  );
}

export default Header;
