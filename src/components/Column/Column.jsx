import Card from "../Card/Card";
import { ColumnWrapper, ColumnTitle, CardsContainer } from "./Column.styled";

function Column({ title, cards }) {
  return (
    <ColumnWrapper>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <CardsContainer>
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            theme={card.theme}
            date={card.date}
            topic={card.topic}
          />
        ))}
      </CardsContainer>
    </ColumnWrapper>
  );
}

export default Column;
