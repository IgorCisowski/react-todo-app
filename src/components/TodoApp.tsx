import React from "react";
import styled from "styled-components";
import { Input } from "./Input";

const TodoAppSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: darkgrey;
`;

const Container = styled.div`
  width: 60%;
  padding: 20px 0;
  border: 2px solid cyan;
  border-radius: 10px;
`;

export const TodoApp = () => {
  return (
    <TodoAppSection>
      <Container>
        <Input />
      </Container>
    </TodoAppSection>
  );
};
