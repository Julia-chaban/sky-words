import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import { MainWrapper } from "./MainPage.styled";
import { useTasks } from "../../context/TaskContext";

function MainPage() {
  const { tasks, loading, error, loadTasks } = useTasks();

  return (
    <MainWrapper>
      <Header onTaskCreated={loadTasks} />
      <Main tasks={tasks} loading={loading} error={error} />
    </MainWrapper>
  );
}

export default MainPage;
