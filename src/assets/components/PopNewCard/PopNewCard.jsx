import "./PopNewCard.css";

function PopNewCard({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="popup popup-new-card">
      <div className="popup__overlay" onClick={onClose}></div>
      <div className="popup__content">
        <h2 className="popup__title">Новая задача</h2>
        <form className="popup__form">
          <input
            type="text"
            placeholder="Название задачи"
            className="popup__input"
          />
          <textarea
            placeholder="Описание"
            className="popup__textarea"
          ></textarea>
          <div className="popup__actions">
            <button type="submit" className="popup__submit">
              Создать
            </button>
            <button type="button" className="popup__cancel" onClick={onClose}>
              Отмена
            </button>
          </div>
        </form>
        <button className="popup__close" onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
}

export default PopNewCard;
