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
} from "./SignUp.styled";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (!formData.name || !formData.login || !formData.password) {
        throw new Error("Все поля обязательны для заполнения");
      }

      if (formData.password.length < 6) {
        throw new Error("Пароль должен содержать минимум 6 символов");
      }

      const response = await authAPI.register(formData);

      if (!response.user || !response.user.token) {
        throw new Error("Неверный ответ от сервера");
      }

      login(response.user.token, response.user);
      navigate("/");
    } catch (err) {
      setError(err.message || "Произошла ошибка при регистрации");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Wrapper>
      <Container>
        <Modal>
          <ModalBlock>
            <ModalTitle>
              <h2>Регистрация</h2>
            </ModalTitle>
            <Form onSubmit={handleSubmit}>
              {error && (
                <div
                  style={{
                    color: "#ff4d4f",
                    background: "#fff2f0",
                    border: "1px solid #ffccc7",
                    padding: "8px 12px",
                    borderRadius: "4px",
                    marginBottom: "16px",
                    fontSize: "14px",
                    textAlign: "center",
                  }}
                >
                  {error}
                </div>
              )}

              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Имя"
                style={{ marginBottom: "7px" }}
                required
                disabled={loading}
              />
              <Input
                type="text"
                name="login"
                value={formData.login}
                onChange={handleChange}
                placeholder="Логин"
                style={{ marginBottom: "7px" }}
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
                {loading ? "Регистрация..." : "Зарегистрироваться"}
              </Button>
              <FormGroup>
                <p>
                  Уже есть аккаунт? <Link to="/login">Войдите здесь</Link>
                </p>
              </FormGroup>
            </Form>
          </ModalBlock>
        </Modal>
      </Container>
    </Wrapper>
  );
}

export default SignUp;
