import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
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
