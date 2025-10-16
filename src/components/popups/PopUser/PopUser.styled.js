import styled from "styled-components";

export const PopupWrapper = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid #4e5566;
  background: #202229;
  box-shadow: 0px 10px 39px 0px rgba(148, 166, 190, 0.4);
  padding: 34px;
  text-align: center;
  z-index: 1002;
`;

export const UserName = styled.p`
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;

export const UserEmail = styled.p`
  color: #94a6be;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

export const ThemeSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const ThemeText = styled.p`
  color: #ffffff;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
`;

export const ThemeToggle = styled.input.attrs({ type: "checkbox" })`
  position: relative;
  width: 24px;
  height: 13px;
  border-radius: 100px;
  background: #eaeef6;
  outline: none;
  appearance: none;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #565eef;
    transition: 0.5s;
  }

  &:checked::before {
    left: 12px;
  }
`;

export const LogoutButton = styled.button`
  width: 72px;
  height: 30px;
  background: transparent;
  color: #ffffff;
  border-radius: 4px;
  border: 1px solid #ffffff;
  cursor: pointer;

  &:hover {
    background-color: #565eef;
    color: #ffffff;
    border-color: #565eef;
  }
`;
