import React from "react";
import { createGlobalStyle } from "styled-components";
import { TodoApp } from "./components/TodoApp";

const GlobalStyle = createGlobalStyle`
  * {
    font-family:arial;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  `;

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <TodoApp />
    </>
  );
}

export default App;
