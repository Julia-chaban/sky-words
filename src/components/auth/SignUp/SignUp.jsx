import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: #000000;
`;

export const Container = styled.div`
  display: block;
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #000000;
`;

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000000;
`;

export const ModalBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #20202c;
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #4e5566;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);

  @media screen and (max-width: 375px) {
    max-width: 368px;
    width: 100%;
    padding: 0 16px;
    border-radius: 0;
    border: none;
    box-shadow: none;
  }
`;

export const ModalTitle = styled.div`
  h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.6px;
    margin-bottom: 20px;
    color: #ffffff;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 100%;
  min-width: 100%;
  border-radius: 8px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  outline: none;
  padding: 10px 8px;
  background-color: #20202c;
  color: #ffffff;
  margin-bottom: 7px;

  &::placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: #94a6be;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    background-color: #33399b;
  }

  @media screen and (max-width: 375px) {
    height: 40px;
  }
`;

export const FormGroup = styled.div`
  text-align: center;

  p,
  a {
    color: #94a6be;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.14px;
  }

  a {
    text-decoration: underline;
    color: #ffffff;
  }
`;

const SignUp = () => {
  return (
    <Container>
      <Modal>
        <ModalBlock>
          <ModalTitle>
            <h2>Регистрация</h2>
          </ModalTitle>
          <Form>
            <Input type="text" placeholder="Имя" />
            <Input type="email" placeholder="Эл. почта" />
            <Input type="password" placeholder="Пароль" />
            <Button type="submit">Зарегистрироваться</Button>
            <FormGroup>
              <p>
                Уже есть аккаунт? <a href="/login">Войти</a>
              </p>
            </FormGroup>
          </Form>
        </ModalBlock>
      </Modal>
    </Container>
  );
};

export default SignUp;
