import styled from "styled-components";

export const PopupWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 7;
  display: ${(props) => (props.$isOpen ? "block" : "none")};
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
  background-color: #ffffff;
  max-width: 370px;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`;

export const PopupUser = styled.div`
  display: block;
  text-align: center;
`;

export const UserName = styled.p`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: -0.6px;
  margin-bottom: 5px;
`;

export const UserMail = styled.p`
  color: #94a6be;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.28px;
  margin-bottom: 10px;
`;

export const UserTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ThemeSubtitle = styled.p`
  color: #000;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.28px;
`;

export const ThemeCheckbox = styled.input`
  position: relative;
  width: 24px;
  height: 13px;
  border-radius: 100px;
  background: #eaeef6;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #94a6be;
    transition: 0.5s;
  }

  &:checked::before {
    left: 12px;
  }
`;

export const PopupClose = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  color: #94a6be;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 20px;

  &:hover {
    color: #000000;
  }
`;
