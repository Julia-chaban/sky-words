import React from "react";
import Column from "../Column/Column";
import { MainWrapper, MainBlock, MainContent } from "./Main.styled";

function Main({ tasks = [], loading = false, error = null }) {
  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  if (loading) {
    return (
      <MainWrapper>
        <div className="container">
          <MainBlock>
            <MainContent>
              {statuses.map((status, index) => (
                <Column key={index} title={status} cardsCount={3} />
              ))}
            </MainContent>
          </MainBlock>
        </div>
      </MainWrapper>
    );
  }

  if (error) {
    return (
      <MainWrapper>
        <div className="container">
          <MainBlock>
            <MainContent>
              <div
                style={{
                  textAlign: "center",
                  padding: "40px",
                  color: "#ffffff",
                  backgroundColor: "#ff6b6b",
                  margin: "20px",
                  borderRadius: "8px",
                }}
              >
                Ошибка загрузки задач: {error}
              </div>
            </MainContent>
          </MainBlock>
        </div>
      </MainWrapper>
    );
  }

  const totalTasks = tasks.reduce((sum, task) => sum + (task ? 1 : 0), 0);

  if (totalTasks === 0) {
    return (
      <MainWrapper>
        <div className="container">
          <MainBlock>
            <MainContent>
              <div
                style={{
                  textAlign: "center",
                  padding: "40px",
                  color: "#ffffff",
                  fontSize: "16px",
                }}
              >
                Задач пока нет. Создайте первую задачу!
              </div>
            </MainContent>
          </MainBlock>
        </div>
      </MainWrapper>
    );
  }

  return (
    <MainWrapper>
      <div className="container">
        <MainBlock>
          <MainContent>
            {statuses.map((status, index) => {
              const statusTasks = tasks.filter(
                (task) => task && task.status === status
              );
              return (
                <Column
                  key={index}
                  title={status}
                  cardsCount={statusTasks.length}
                  tasks={statusTasks}
                />
              );
            })}
          </MainContent>
        </MainBlock>
      </div>
    </MainWrapper>
  );
}

export default Main;
