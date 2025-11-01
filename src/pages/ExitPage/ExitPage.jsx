import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ExitWrapper, ExitContent } from "./ExitPage.styled";

function ExitPage() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      logout();
      navigate("/login");
    }, 2000);

    return () => clearTimeout(timer);
  }, [logout, navigate]);

  return (
    <ExitWrapper>
      <ExitContent>
        <h1>Выход из аккаунта</h1>
        <p>Вы будете перенаправлены на страницу входа...</p>
      </ExitContent>
    </ExitWrapper>
  );
}

export default ExitPage;
