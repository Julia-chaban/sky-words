import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { authAPI } from "../../../services/authAPI";
import {
  Wrapper,
  Container,
  Modal,
  ModalBlock,
  ModalTitle,
  Form,
  Input,
  Button,
  FormGroup,
  ErrorMessage,
} from "./SignIn.styled";

function SignIn() {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Валидация полей
      if (!formData.login || !formData.password) {
        throw new Error("Все поля обязательны для заполнения");
      }

      // API запрос
      const response = await authAPI.login({
        login: formData.login,
        password: formData.password,
      });

      // Сохраняем авторизацию
      login(response.token, response.user);
      navigate("/"); // Перенаправляем на главную
    } catch (err) {
      setError(err.message || "Неверный логин или пароль");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <Container>
        <Modal>
          <ModalBlock>
            <ModalTitle>
              <h2>Вход</h2>
            </ModalTitle>
            <Form onSubmit={handleSubmit}>
              {error && <ErrorMessage>{error}</ErrorMessage>}

              <Input
                type="text"
                name="login"
                value={formData.login}
                onChange={handleChange}
                placeholder="Логин"
                style={{ marginBottom: "7px" }} // Заменяем first атрибут
                required
                disabled={loading}
              />
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Пароль"
                required
                disabled={loading}
              />
              <Button type="submit" disabled={loading}>
                {loading ? "Загрузка..." : "Войти"}
              </Button>
              <FormGroup>
                <p>Нужно зарегистрироваться?</p>
                <Link to="/register">Регистрируйтесь здесь</Link>
              </FormGroup>
            </Form>
          </ModalBlock>
        </Modal>
      </Container>
    </Wrapper>
  );
}

export default SignIn;
