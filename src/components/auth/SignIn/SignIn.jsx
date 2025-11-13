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
      if (!formData.login.trim() || !formData.password.trim()) {
        throw new Error("Все поля обязательны для заполнения");
      }

      if (
        formData.login.trim().length === 0 ||
        formData.password.trim().length === 0
      ) {
        throw new Error("Поля не могут содержать только пробелы");
      }

      const response = await authAPI.login({
        login: formData.login.trim(),
        password: formData.password.trim(),
      });

      if (!response.user || !response.user.token) {
        throw new Error("Неверный ответ от сервера");
      }

      login(response.user.token, response.user);
      navigate("/");
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
