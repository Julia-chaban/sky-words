import { Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../Header/Header";
import Main from "../Main/Mains";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
  }

  button,
  ._btn {
    cursor: pointer;
    outline: none;
  }

  ul li {
    list-style: none;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    color: #000000;
    background-color: #EAEEF6;
  }

  ._hover01:hover {
    background-color: #33399b;
  }

  ._hover02:hover, .header__user:hover {
    color: #33399b;
  }

  ._hover03:hover {
    background-color: #565EEF;
    color: #FFFFFF;
    border-color: #565EEF;
  }

  ._orange {
    background-color: #FF6D00;
    color: #FFE4C2;
  }

  ._green {
    background-color: #06B16E;
    color: #B4FDD1;
  }

  ._purple {
    background-color: #9A48F1;
    color: #E9D4FF;
  }

  ._gray {
    background: #94A6BE;
    color: #FFFFFF;
  }
`;

const AppWrapper = styled.div`
  min-height: 100vh;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Main />
              </>
            }
          />
          <Route
            path="/main"
            element={
              <>
                <Header />
                <Main />
              </>
            }
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </AppWrapper>
    </>
  );
}

export default App;
