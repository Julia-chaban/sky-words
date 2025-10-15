import "./SignUp.css";
import { Link } from "react-router-dom";
function SignUp() {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Форма регистрации отправлена");
  };

  return (
    <div className="wrapper">
      <div className="container-signup">
        <div className="modal">
          <div className="modal__block">
            <div className="modal__ttl">
              <h2>Регистрация</h2>
            </div>
            <form className="modal__form-login" onSubmit={handleSubmit}>
              <input
                className="modal__input first-name"
                type="text"
                name="first-name"
                placeholder="Имя"
              />
              <input
                className="modal__input login"
                type="text"
                name="login"
                placeholder="Эл. почта"
              />
              <input
                className="modal__input password-first"
                type="password"
                name="password"
                placeholder="Пароль"
              />
              <button className="modal__btn-signup-ent _hover01" type="submit">
                Зарегистрироваться
              </button>
              <div className="modal__form-group">
                <p>
                  Уже есть аккаунт? <Link to="/signin">Войдите здесь</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
