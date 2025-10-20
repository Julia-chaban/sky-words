import styled from "styled-components";

export const PopupWrapper = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
`;

export const PopupContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
`;

export const PopupBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #20202c;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #4e5566;
  position: relative;
`;

export const PopupContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopupTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopupTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: #ffffff;
`;

export const ThemeBadge = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  background-color: ${(props) => {
    switch (props.theme) {
      case "orange":
        return "#FF6D00";
      case "green":
        return "#06B16E";
      case "purple":
        return "#9A48F1";
      default:
        return "#FF6D00";
    }
  }};
  color: ${(props) => {
    switch (props.theme) {
      case "orange":
        return "#FFE4C2";
      case "green":
        return "#B4FDD1";
      case "purple":
        return "#E9D4FF";
      default:
        return "#FFE4C2";
    }
  }};
  opacity: 1;

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }
`;

export const StatusSection = styled.div`
  margin-bottom: 11px;
`;

export const StatusTitle = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 14px;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;

  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }
`;

export const PopupWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const PopupForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormTextarea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #151419;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 188px;
  color: #ffffff;
  resize: vertical;
  font-family: inherit;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const PopupClose = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94a6be;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 20px;

  &:hover {
    color: #ffffff;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

export const Button = styled.button`
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  border-radius: 4px;
  border: none;
  outline: none;
  font-size: 14px;
  cursor: pointer;

  ${(props) =>
    props.variant === "border" &&
    `
    border: 0.7px solid #FFFFFF;
    background: transparent;
    color: #FFFFFF;
    
    &:hover {
      background-color: #565EEF;
      color: #FFFFFF;
      border-color: #565EEF;
    }
  `}

  ${(props) =>
    props.variant === "background" &&
    `
    background: #565EEF;
    color: #FFFFFF;
    
    &:hover {
      background-color: #33399b;
    }
  `}
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;
