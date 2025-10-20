import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #20202c;
`;

export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

export const HeaderLogo = styled.div`
  img {
    width: 85px;
  }
`;

export const HeaderNav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const HeaderButton = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;
  cursor: pointer;

  &:hover {
    background-color: #33399b;
  }

  a {
    color: #ffffff;
    text-decoration: none;
  }
`;

export const HeaderUser = styled.div`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    color: #33399b;

    &::after {
      border-left-color: #33399b;
      border-bottom-color: #33399b;
    }
  }

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid #ffffff;
    border-bottom: 1.9px solid #ffffff;
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }
`;
