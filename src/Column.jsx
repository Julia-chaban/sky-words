import Card from "./Card";

function Column({ title, cardsCount }) {
  const themes = ["_orange", "_green", "_purple"];

  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {Array.from({ length: cardsCount }).map((_, index) => (
          <Card
            key={index}
            theme={themes[index % themes.length]}
            title="Название задачи"
            date="30.10.23"
          />
        ))}
      </div>
    </div>
  );
}

export default Column;
