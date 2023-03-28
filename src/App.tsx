import { createGlobalStyle } from "styled-components";
import { ToDoSection } from "./components/ToDoSection";

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
      <ToDoSection />
    </>
  );
}

export default App;
