import React, { useState } from "react";
import styled from "styled-components";
import { ToDo } from "../types";
import { RenderedTasks } from "./RenderedTasks";

const AppContainer = styled.div`
  background-color: #23272f;
  padding: 40px 20px 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
`;

const H1 = styled.h1`
  width: 100%;
  color: white;
  text-align: center;
  font-size: 38px;
  margin-bottom: 30px;
`;

const InputAndButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  margin-bottom: 40px;
`;

const MainInput = styled.input`
  color: white;
  padding: 10px 15px;
  border-radius: 30px;
  background-color: #333a45;
  border: none;
  font-size: 18px;
  width: 95%;
  :focus {
    outline: none;
    box-shadow: 0 0 0 2px #149eca;
  }
`;
const AddButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: white;
  font-size: 30px;
`;

export const ToDoApp = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [value, setValue] = useState("");

  // ADD TODO FUNCTION
  const handleCreateTask = () => {
    // Prevent from adding empty Input
    if (value === "") {
      return false;
    } else {
      setTodos([
        ...todos,
        { id: Date.now(), title: value, status: false, isEditing: false },
      ]);
    }
    //Reset Input value
    setValue("");
  };

  console.log(todos);

  // target changing input value
  const handleChangeTaskTitle = (e: any) => {
    setValue(e.target.value);
  };

  // DELETE TODO FUNCTION
  const handleDeleteTask = (id: any) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // UPDATE COMPLETION STATUS
  const handleChangeStatus = (id: any) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.status = !todo.status;
        }
        return todo;
      })
    );
  };

  // EDIT TASK
  const handleEditTaskContent = (id: any) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.isEditing = !todo.isEditing;
        }
        return todo;
      })
    );
  };
  // SAVE EDITED TASK
  const handleSaveEditedTaskContent = (value: string, id: any) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.isEditing = !todo.isEditing;
          todo.title = value;
        }
        return todo;
      })
    );
  };

  return (
    <AppContainer>
      <H1>Get Things Done!</H1>
      <InputAndButtonContainer>
        <MainInput
          type="text"
          value={value}
          onChange={handleChangeTaskTitle}
        ></MainInput>
        <AddButton onClick={handleCreateTask}>+</AddButton>
      </InputAndButtonContainer>
      <RenderedTasks
        todos={todos}
        deleteTask={handleDeleteTask}
        updateTask={handleChangeStatus}
        editTask={handleEditTaskContent}
        saveEditTask={handleSaveEditedTaskContent}
      />
    </AppContainer>
  );
};
