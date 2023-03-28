import React, { useState } from "react";
import styled from "styled-components";
import { Todo } from "./Todo";
import { ToDo } from "../types";

const Container = styled.div``;

export const Input = () => {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState<ToDo[]>([]);

  const handleAddTask = () => {
    if (value === "") {
      return false;
    } else {
      setTasks([...tasks, { id: Date.now(), title: value, status: false }]);
    }
    setValue("");
  };

  return (
    <Container>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleAddTask}>+</button>
      <Todo tasks={tasks} setTasks={setTasks} />
    </Container>
  );
};
