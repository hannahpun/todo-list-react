import { useState, useEffect } from "react";
import { SearchBar } from "./components/SearchBar";
import styled from "@emotion/styled";
import { AddToDo } from "./components/AddToDo";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";

import "./App.css";

const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: 450,
});

export const Header = styled.h1({
  width: "100%",
  height: 150,
  fontSize: 60,
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

function App() {
  const initTask = [
    {
      id: 0,
      description: "Do homework",
      checked: false,
      created_at: 0,
      completed_at: 0,
    },
  ];
  const [todos, setTodos] = useState<Todo[]>(initTask);
  const [filterTodos, setFilterTodos] = useState<Todo[]>([]);
  const [serachVal, setSerachVal] = useState("");

  useEffect(() => {
    let filterTodos = [...todos];
    filterTodos = filterTodos.filter((todo) => {
      return todo?.description.toLowerCase().includes(serachVal);
    });
    setFilterTodos(filterTodos);
  }, [todos, serachVal]);

  const addTodo = (description: string) => {
    if (!description) {
      return;
    }

    setTodos((prev) => [
      {
        id: new Date().getTime(),
        description,
        checked: false,
        created_at: new Date().getTime(),
        completed_at: 0,
      },
      ...prev,
    ]);
  };

  const toggleComplete = (checked: boolean, index: number) => {
    // handle the check/uncheck logic
    const updateTodos = [...todos];
    updateTodos[index] = {
      ...updateTodos[index],
      checked,
      completed_at: checked ? new Date().getTime() : 0,
    };

    // completed tasks sort by asc; uncompleted tasks sort by desc
    setTodos(
      updateTodos.sort(
        (a, b) => a.completed_at - b.completed_at || b.created_at - a.created_at
      )
    );
  };

  const editToDo = (description: string, index: number) => {
    const updateTodos = [...todos];
    updateTodos[index] = {
      ...updateTodos[index],
      description,
    };

    setTodos(updateTodos);
  };

  const deleteToDo = (index: number) => {
    const updateTodos = [...todos];
    updateTodos.splice(index, 1);

    setTodos(updateTodos);
  };

  return (
    <Wrapper>
      <Header>Todo List</Header>
      <SearchBar serachVal={serachVal} setSerachVal={setSerachVal} />
      <AddToDo onAdd={addTodo} />
      <TodoList>
        {filterTodos.map((todo, index) => (
          <TodoItem
            {...todo}
            key={index}
            index={index}
            toggleComplete={toggleComplete}
            deleteToDo={deleteToDo}
            editToDo={editToDo}
          />
        ))}
      </TodoList>
    </Wrapper>
  );
}

export default App;
