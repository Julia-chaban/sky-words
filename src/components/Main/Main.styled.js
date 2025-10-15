import styled from "styled-components";

export const MainWrapper = styled.main`
  width: 100%;
  background-color: #eaeef6;
`;

export const MainContainer = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;

  @media (max-width: 1200px) {
    display: block;
  }
`;

export const LoadingMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  color: #94a6be;
  font-size: 18px;
`;
