import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleUserClick = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          {/* Показываем только светлый логотип */}
          <div className="header__logo">
            <Link to="/">
              <img src="/images/logo.png" alt="Sky Words" />
            </Link>
          </div>
          <nav className="header__nav">
            <button className="header__btn-main-new _hover01">
              Создать новую задачу
            </button>
            <button className="header__user _hover02" onClick={handleUserClick}>
              Ivan Ivanov
            </button>
            <div
              className="header__pop-user-set pop-user-set"
              style={{ display: isUserMenuOpen ? "block" : "none" }}
            >
              <p className="pop-user-set__name">Ivan Ivanov</p>
              <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
              <div className="pop-user-set__theme">
                <p>Темная тема</p>
                <input type="checkbox" className="checkbox" name="checkbox" />
              </div>
              <button type="button" className="_hover03">
                <Link to="/signin">Выйти</Link>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
