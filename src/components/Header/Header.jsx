import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useTasks } from "../../context/TaskContext";
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
  const { isAuth, user, logout } = useAuth();
  const { tasks, loadTasks } = useTasks();
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
                <PopNewCard onTaskCreated={loadTasks} />
                <HeaderUser onClick={toggleUserPopup}>
                  {user?.name || "Пользователь"}
                </HeaderUser>

                <PopUser
                  isOpen={isUserPopupOpen}
                  onClose={closeUserPopup}
                  onLogout={handleLogout}
                  user={user}
                  taskCount={tasks.length}
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
