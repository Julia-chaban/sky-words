import { useState, useEffect } from "react";
import Column from "../Column/Column";
import { cardsData } from "../../data.js";
import {
  MainWrapper,
  MainContainer,
  MainBlock,
  MainContent,
  LoadingMessage,
} from "./Main.styled";

function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCards(cardsData);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const columns = [
    { title: "Без статуса", status: "Без статуса" },
    { title: "Нужно сделать", status: "Нужно сделать" },
    { title: "В работе", status: "В работе" },
    { title: "Тестирование", status: "Тестирование" },
    { title: "Готово", status: "Готово" },
  ];

  if (isLoading) {
    return (
      <MainWrapper>
        <MainContainer>
          <MainBlock>
            <LoadingMessage>Данные загружаются...</LoadingMessage>
          </MainBlock>
        </MainContainer>
      </MainWrapper>
    );
  }

  return (
    <MainWrapper>
      <MainContainer>
        <MainBlock>
          <MainContent>
            {columns.map((column, index) => {
              const columnCards = cards.filter(
                (card) => card.status === column.status
              );
              return (
                <Column key={index} title={column.title} cards={columnCards} />
              );
            })}
          </MainContent>
        </MainBlock>
      </MainContainer>
    </MainWrapper>
  );
}

export default Main;
