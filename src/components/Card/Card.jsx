import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PopBrowse from "../popups/PopBrowse/PopBrowse";
import {
  CardsItem,
  CardsCard,
  CardGroup,
  CardTheme,
  CardButton,
  CardTitle,
  CardContent,
  CardDate,
} from "./Card.styled";

function Card({ theme, title, date, id, task }) {
  const [isBrowseOpen, setIsBrowseOpen] = useState(false);
  const navigate = useNavigate();

  const getThemeText = (themeClass, taskTopic) => {
    // Если есть реальная задача, используем ее topic
    if (task && task.topic) {
      return task.topic;
    }

    // Иначе используем старую логику
    switch (themeClass) {
      case "_orange":
        return "Web Design";
      case "_green":
        return "Research";
      case "_purple":
        return "Copywriting";
      default:
        return "Task";
    }
  };

  const openBrowse = () => setIsBrowseOpen(true);
  const closeBrowse = () => setIsBrowseOpen(false);

  const handleCardClick = () => {
    navigate(`/card/${id}`);
  };

  return (
    <>
      <CardsItem>
        <CardsCard>
          <CardGroup>
            <CardTheme theme={theme}>
              <p>{getThemeText(theme, task?.topic)}</p>
            </CardTheme>
            <CardButton onClick={openBrowse}>
              <div></div>
              <div></div>
              <div></div>
            </CardButton>
          </CardGroup>
          <CardContent>
            <CardTitle onClick={handleCardClick} style={{ cursor: "pointer" }}>
              {title}
            </CardTitle>
            <CardDate>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <g clipPath="url(#clip0_1_415)">
                  <path
                    d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                    stroke="#94A6BE"
                    strokeWidth="0.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                    stroke="#94A6BE"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_415">
                    <rect width="13" height="13" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p>{date}</p>
            </CardDate>
          </CardContent>
        </CardsCard>
      </CardsItem>

      <PopBrowse
        isOpen={isBrowseOpen}
        onClose={closeBrowse}
        title={title}
        cardId={id}
        task={task}
      />
    </>
  );
}

export default Card;
