import styled from "styled-components";
import { Link } from "react-router-dom";

export const NotFoundWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #eaeef6;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: block;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NotFoundBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  text-align: center;
`;

export const NotFoundTitle = styled.h1`
  font-size: 100px;
  font-weight: 700;
  color: #565eef;
  margin-bottom: 20px;
`;

export const NotFoundText = styled.p`
  font-size: 16px;
  color: #000000;
  margin-bottom: 10px;
  line-height: 1.5;
`;

export const BackButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #565eef;
  color: #ffffff;
  text-decoration: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  margin-top: 20px;

  &:hover {
    background-color: #33399b;
  }
`;
