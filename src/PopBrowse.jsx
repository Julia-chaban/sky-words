import "./PopBrowse.css";

function PopBrowse({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="popup popup-browse">
      <div className="popup__overlay" onClick={onClose}></div>
      <div className="popup__content">
        <h2 className="popup__title">Просмотр задачи</h2>
        {/* содержимое попапа */}
        <button className="popup__close" onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
}

export default PopBrowse;
