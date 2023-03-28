import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { ToDo } from "../types";

interface TodoProps {
  tasks: ToDo[];
  setTasks: Dispatch<SetStateAction<ToDo[]>>;
}

const Container = styled.ul`
  padding: 20px 10px;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  margin: 8px;
  border: 1px solid cyan;
  color: white;
`;

const UD = styled.div`
  display: flex;
  border-left: 2px solid white;
  padding-left: 10px;
`;

const Complete = styled.input`
  cursor: pointer;
`;

const Delete = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: white;
  margin-left: 10px;
`;

export const Todo = ({ tasks, setTasks }: TodoProps) => {
  return (
    <Container>
      {tasks.map((li: any) => {
        return (
          <ListItem key={li.id}>
            {li.title}
            <UD>
              <Complete
                style={
                  {
                    // textDecoration: tasks.status ? "line-through" : "none",
                  }
                }
                type={"checkbox"}
                onChange={() => {
                  setTasks(
                    tasks.map((task: any) => {
                      if (task.id === li.id) {
                        task.status = !task.status;
                      }
                      return task;
                    })
                  );
                }}
              ></Complete>
              <Delete
                onClick={() =>
                  setTasks(tasks.filter((task: any) => task.id !== li.id))
                }
              >
                X
              </Delete>
            </UD>
          </ListItem>
        );
      })}
    </Container>
  );
};
