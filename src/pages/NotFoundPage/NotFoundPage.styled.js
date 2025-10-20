import styled from "styled-components";

export const NotFoundWrapper = styled.div`
  min-height: 100vh;
  background-color: #151419;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
`;

export const NotFoundContent = styled.div`
  text-align: center;
  background-color: #20202c;
  padding: 40px;
  border-radius: 10px;
  border: 0.7px solid #4e5566;
`;

export const HomeButton = styled.div`
  margin-top: 20px;

  a {
    display: inline-block;
    padding: 10px 20px;
    background-color: #565eef;
    color: #ffffff;
    text-decoration: none;
    border-radius: 5px;

    &:hover {
      background-color: #33399b;
    }
  }
`;
