import Card from "../Card/Card";
import { MainColumn, ColumnTitle, Cards } from "./Column.styled";

function Column({ title, cardsCount, tasks = [] }) {
  const themes = ["_orange", "_green", "_purple"];

  return (
    <MainColumn className="column">
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <Cards>
        {tasks.map((task, index) => (
          <Card
            key={task._id || index}
            theme={themes[index % themes.length]}
            title={task.title}
            date={new Date(task.date).toLocaleDateString("ru-RU")}
            id={task._id}
            task={task}
          />
        ))}
        {tasks.length === 0 &&
          cardsCount > 0 &&
          Array.from({ length: cardsCount }).map((_, index) => (
            <Card
              key={`placeholder-${index}`}
              theme={themes[index % themes.length]}
              title="Загрузка..."
              date="..."
              id={index}
            />
          ))}
      </Cards>
    </MainColumn>
  );
}

export default Column;
