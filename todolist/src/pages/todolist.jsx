import React, { useState } from "react";

import Paper from "../components/paper/paper";
//import Header from "../components/header/header";
import Header from "../components/header/headerNoJSX";
import Todoform from "../components/todoform/todoform";
import Todos from "../components/todos/todos";

import Container from "../layout/container";

const Todolist = () => {
  const [todos, setTodos] = useState([
    { text: "leaning react", isCompleted: false },
    { text: "leaning react hook", isCompleted: false },
    { text: "leaning styling in react", isCompleted: false }
  ]);

  const [showAdd, setShowAdd] = useState(false);

  const addTodo = value => {
    if (todos.length < 8) {
      const addedTodo = [...todos, { text: value, isCompleted: false }];
      setTodos(addedTodo);
    } else {
      alert("only 8 todos isi allowed");
    }
  };

  const completeTodo = index => {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;
    setTodos(addedTodo);
  };

  const clearTodos = () => !showAdd && setTodos([]);
  const showAddToggle = () => setShowAdd(!showAdd);

  console.log("todos", todos);

  return (
    /*<Paper>
      <Header
        showAddToggle={showAddToggle}
        showAdd={showAdd}
        clearTodos={clearTodos}
      />
      <Todoform addTodo={addTodo} showAdd={showAdd} />
      <Todos todos={todos} completeTodo={completeTodo} />
    </Paper>*/

    <Paper>
      <Container
        FlexDirection="column"
        justifyContent="space-between"
        height="100%"
      >
        <Header
          showAddToggle={showAddToggle}
          showAdd={showAdd}
          clearTodos={clearTodos}
        />
        <Todoform addTodo={addTodo} showAdd={showAdd} />
        <Todos todos={todos} completeTodo={completeTodo} />
      </Container>
    </Paper>
  );
};

export default Todolist;
