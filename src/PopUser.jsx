import "./PopUser.css";

function PopUser({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="popup popup-user">
      <div className="popup__overlay" onClick={onClose}></div>
      <div className="popup__content">
        <h2 className="popup__title">Профиль пользователя</h2>
        {/* содержимое попапа */}
        <button className="popup__close" onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
}

export default PopUser;
