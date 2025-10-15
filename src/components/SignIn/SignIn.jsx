import "./SignIn.css";
import { Link } from "react-router-dom";
function SignIn() {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Форма входа отправлена");
  };

  return (
    <div className="wrapper">
      <div className="container-signin">
        <div className="modal">
          <div className="modal__block">
            <div className="modal__ttl">
              <h2>Вход</h2>
            </div>
            <form className="modal__form-login" onSubmit={handleSubmit}>
              <input
                className="modal__input"
                type="text"
                name="login"
                placeholder="Эл. почта"
              />
              <input
                className="modal__input"
                type="password"
                name="password"
                placeholder="Пароль"
              />
              <button className="modal__btn-enter _hover01" type="submit">
                Войти
              </button>
              <div className="modal__form-group">
                <p>Нужно зарегистрироваться?</p>
                <Link to="/signup">Регистрируйтесь здесь</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
