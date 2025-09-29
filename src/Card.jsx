import "./Card.css";

function Card({ title, description }) {
  return (
    <div className="card">
      <h4 className="card__title">{title}</h4>
      <p className="card__description">{description}</p>
      <div className="card__footer">
        <span className="card__date">15 дек</span>
        <div className="card__actions">
          <button className="card__edit">✏️</button>
          <button className="card__delete">🗑️</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
