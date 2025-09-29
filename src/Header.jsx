import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <a href="/" className="header__logo">
          <img src="/images/logo.png" alt="Sky Words" />
        </a>
        <nav className="header__nav">
          <a href="#main" className="header__link">
            Главная
          </a>
          <a href="#tasks" className="header__link">
            Задачи
          </a>
          <a href="#calendar" className="header__link">
            Календарь
          </a>
        </nav>
      </div>
      <div className="header__right">
        <button className="header__user-btn">
          <img src="/images/user-avatar.png" alt="User" />
        </button>
      </div>
    </header>
  );
}

export default Header;
