import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import { MainWrapper } from "./MainPage.styled";

function MainPage() {
  return (
    <MainWrapper>
      <Header />
      <Main />
    </MainWrapper>
  );
}

export default MainPage;
