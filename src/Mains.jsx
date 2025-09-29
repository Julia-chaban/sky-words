import "./Main.css";
import Column from "./Column";

function Main() {
  const columns = [
    { id: 1, title: "Бэклог", color: "orange" },
    { id: 2, title: "В работе", color: "blue" },
    { id: 3, title: "Готово", color: "green" },
  ];

  return (
    <main className="main">
      <div className="main__container">
        {columns.map((column) => (
          <Column key={column.id} title={column.title} color={column.color} />
        ))}
      </div>
    </main>
  );
}

export default Main;
