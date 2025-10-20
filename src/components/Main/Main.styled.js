import styled from "styled-components";

export const MainWrapper = styled.main`
  width: 100%;
  background-color: #151419;
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 1200px) {
    display: block;
  }
`;
