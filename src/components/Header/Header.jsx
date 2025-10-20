import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import PopNewCard from "../popups/PopNewCard/PopNewCard";
import PopUser from "../popups/PopUser/PopUser";
import {
  HeaderWrapper,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderUser,
} from "./Header.styled";

function Header() {
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);
  const { isAuth, logout } = useAuth();
  const navigate = useNavigate();

  const toggleUserPopup = () => {
    setIsUserPopupOpen(!isUserPopupOpen);
  };

  const closeUserPopup = () => {
    setIsUserPopupOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
    closeUserPopup();
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <HeaderWrapper>
      <div className="container">
        <HeaderBlock>
          <HeaderLogo onClick={goToHome} style={{ cursor: "pointer" }}>
            <img src="/images/logo.png" alt="logo" />
          </HeaderLogo>
          <HeaderNav>
            {isAuth ? (
              <>
                <PopNewCard />
                <HeaderUser onClick={toggleUserPopup}>Ivan Ivanov</HeaderUser>

                <PopUser
                  isOpen={isUserPopupOpen}
                  onClose={closeUserPopup}
                  onLogout={handleLogout}
                />
              </>
            ) : (
              <button
                onClick={() => navigate("/login")}
                style={{
                  width: "100px",
                  height: "30px",
                  borderRadius: "4px",
                  backgroundColor: "#565EEF",
                  color: "#FFFFFF",
                  border: "none",
                  fontSize: "14px",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
              >
                Войти
              </button>
            )}
          </HeaderNav>
        </HeaderBlock>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
