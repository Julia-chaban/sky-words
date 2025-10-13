import "./Column.css";
import Card from "../Card/Card";

function Column({ title, cards }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            theme={card.theme}
            date={card.date}
            topic={card.topic}
          />
        ))}
      </div>
    </div>
  );
}

export default Column;
