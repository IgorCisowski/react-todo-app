import React from "react";
import styled from "styled-components";
import { ToDoApp } from "./ToDoApp";

const TodoAppSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #191b21;
`;

const SectionContainer = styled.div`
  padding: 20px 20px;
  margin: 0 auto;
  border: 1px solid red;
  max-width: 1000px;
  width: 100%;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ToDoSection = () => {
  return (
    <TodoAppSection>
      <SectionContainer>
        <ToDoApp />
      </SectionContainer>
    </TodoAppSection>
  );
};
