import Column from "./Column";

function Main() {
  const columns = [
    { title: "Без статуса", cards: 5 },
    { title: "Нужно сделать", cards: 1 },
    { title: "В работе", cards: 3 },
    { title: "Тестирование", cards: 1 },
    { title: "Готово", cards: 1 },
  ];

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {columns.map((column, index) => (
              <Column
                key={index}
                title={column.title}
                cardsCount={column.cards}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
