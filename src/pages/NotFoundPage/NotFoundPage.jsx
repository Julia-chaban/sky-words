import { Link } from "react-router-dom";
import {
  NotFoundWrapper,
  NotFoundContent,
  HomeButton,
} from "./NotFoundPage.styled";

function NotFoundPage() {
  return (
    <NotFoundWrapper>
      <NotFoundContent>
        <h1>404 - Страница не найдена</h1>
        <p>Извините, запрашиваемая страница не существует.</p>
        <HomeButton>
          <Link to="/">Вернуться на главную</Link>
        </HomeButton>
      </NotFoundContent>
    </NotFoundWrapper>
  );
}

export default NotFoundPage;
