import { useState, useEffect } from "react";
import Column from "../Column/Column.jsx";
import { cardsData } from "../../data.js";

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
      <main className="main">
        <div className="container">
          <div className="main__block">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "50vh",
                color: "#94A6BE",
                fontSize: "18px",
              }}
            >
              Данные загружаются...
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {columns.map((column, index) => {
              const columnCards = cards.filter(
                (card) => card.status === column.status
              );
              return (
                <Column key={index} title={column.title} cards={columnCards} />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
