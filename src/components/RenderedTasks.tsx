import React from "react";
import styled from "styled-components";
import { UpdatedTask } from "./UpdatedTask";
import { Props } from "../types";
// import deleteSvg from "../assets/delete.svg";
// import updateSvg from "../assets/update.svg";

const ListItem = styled.li<Props>`
  display: flex;
  justify-content: space-between;
  padding: 12px 10px;
  margin-bottom: 15px;
  color: white;
  border-radius: 5px;
  background-color: #149eca;
  text-decoration: ${({ todo }) => (todo.status ? "line-through" : "none")};
`;

const LiFuncWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const UpdateButton = styled.input`
  cursor: pointer;
  border: none;
  color: white;
  background-color: transparent;
`;

const EditButton = styled.button`
  cursor: pointer;
  border: none;
  color: white;
  background-color: transparent;
`;

const DeleteButton = styled.button`
  cursor: pointer;
  border: none;
  color: white;
  background-color: transparent;
`;

export const RenderedTasks = ({
  todos,
  deleteTask,
  updateTask,
  editTask,
  saveEditTask,
}: any) => {
  return (
    <ul>
      {todos.map((todo: any) => {
        return todo.isEditing ? (
          <UpdatedTask save={saveEditTask} task={todo} key={todo.id} />
        ) : (
          <ListItem key={todo.id} todo={todo}>
            {todo.title}
            <LiFuncWrapper>
              <UpdateButton
                type={"checkbox"}
                onChange={() => updateTask(todo.id)}
              ></UpdateButton>
              <EditButton onClick={() => editTask(todo.id)}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="1.2em"
                  width="1.2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path>{" "}
                </svg>
              </EditButton>
              <DeleteButton onClick={() => deleteTask(todo.id)}>
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1.2em"
                  width="1.2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="3 6 5 6 21 6"></polyline>{" "}
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>{" "}
                  <line x1="10" y1="11" x2="10" y2="17"></line>{" "}
                  <line x1="14" y1="11" x2="14" y2="17"></line>{" "}
                </svg>
              </DeleteButton>
            </LiFuncWrapper>
          </ListItem>
        );
      })}
    </ul>
  );
};
