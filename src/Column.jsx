import "./Column.css";
import Card from "./Card";

function Column({ title, color }) {
  const cards = [
    { id: 1, title: "Задача 1", description: "Описание задачи 1" },
    { id: 2, title: "Задача 2", description: "Описание задачи 2" },
  ];

  return (
    <div className={`column column--${color}`}>
      <div className="column__header">
        <h3 className="column__title">{title}</h3>
        <span className="column__count">{cards.length}</span>
      </div>
      <div className="column__cards">
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <button className="column__add-btn">+ Добавить карточку</button>
    </div>
  );
}

export default Column;
