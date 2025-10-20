import Card from "../Card/Card";
import { MainColumn, ColumnTitle, Cards } from "./Column.styled";

function Column({ title, cardsCount }) {
  const themes = ["_orange", "_green", "_purple"];

  return (
    <MainColumn className="column">
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <Cards>
        {Array.from({ length: cardsCount }).map((_, index) => (
          <Card
            key={index}
            theme={themes[index % themes.length]}
            title="Название задачи"
            date="30.10.23"
            id={index + 1} // Добавляем ID для навигации
          />
        ))}
      </Cards>
    </MainColumn>
  );
}

export default Column;
