import React from "react";
import Column from "../Column/Column";
import { MainWrapper, MainBlock, MainContent } from "./Main.styled";

function Main() {
  const columns = [
    { title: "Без статуса", cards: 5 },
    { title: "Нужно сделать", cards: 1 },
    { title: "В работе", cards: 3 },
    { title: "Тестирование", cards: 1 },
    { title: "Готово", cards: 1 },
  ];

  return (
    <MainWrapper>
      <div className="container">
        <MainBlock>
          <MainContent>
            {columns.map((column, index) => (
              <Column
                key={index}
                title={column.title}
                cardsCount={column.cards}
              />
            ))}
          </MainContent>
        </MainBlock>
      </div>
    </MainWrapper>
  );
}

export default Main;
