import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 10px;
  margin-bottom: 15px;
  color: white;
  border-radius: 5px;
  background-color: #149eca;
`;

const UpdateInput = styled.input`
  outline: none;
  border: none;
  width: 95%;
  background-color: transparent;
  color: white;
  font-size: 16px;
`;

const UpdateButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: white;
`;

export const UpdatedTask = ({ save, task }: any) => {
  const [value, setValue] = useState(task.title);
  return (
    <Container>
      <UpdateInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></UpdateInput>
      <UpdateButton onClick={() => save(value, task.id)}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1.2em"
          width="1.2em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
        </svg>
      </UpdateButton>
    </Container>
  );
};
