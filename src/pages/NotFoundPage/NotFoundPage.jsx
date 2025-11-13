import { Link } from "react-router-dom";
import {
  NotFoundWrapper,
  Container,
  NotFoundBlock,
  NotFoundTitle,
  NotFoundText,
  BackButton,
} from "./NotFoundPage.styled";

function NotFoundPage() {
  return (
    <NotFoundWrapper>
      <Container>
        <NotFoundBlock>
          <NotFoundTitle>404</NotFoundTitle>
          <NotFoundText>Страница не найдена</NotFoundText>
          <NotFoundText>
            Возможно, она была удалена или перенесена на другой адрес
          </NotFoundText>
          <BackButton to="/">Вернуться на главную</BackButton>
        </NotFoundBlock>
      </Container>
    </NotFoundWrapper>
  );
}

export default NotFoundPage;
