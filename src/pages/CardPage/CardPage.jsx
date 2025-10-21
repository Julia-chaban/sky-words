import { useParams } from "react-router-dom";
import { CardPageWrapper, CardContent, CardId } from "./CardPage.styled";

function CardPage() {
  const { id } = useParams();

  return (
    <CardPageWrapper>
      <CardContent>
        <h1>Просмотр карточки</h1>
        <CardId>ID карточки: {id}</CardId>
        <p>Здесь будет содержимое карточки с ID: {id}</p>
      </CardContent>
    </CardPageWrapper>
  );
}

export default CardPage;
