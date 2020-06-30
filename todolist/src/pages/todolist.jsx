import React, { useState } from "react";

import useStateWithLocalStorage from "../hooks/useStateWithLocalStorage";
import Paper from "../components/paper/paper";
//import Paper from "../components/paper/paperClass";
import Header from "../components/header/header";
//import Header from "../components/header/headerNoJSX";
//import Header from "../components/header/headerClass";
import Todoform from "../components/todoform/todoform";
//import Todoform from "../components/todoform/todoformClass";
import Todos from "../components/todos/todos";
//import Todos from "../components/todos/todosClass";

import Container from "../layout/container";

const Todolist = () => {
  //const [todos, setTodos] = useState([
    //{ text: "leaning react", isCompleted: false },
    //{ text: "leaning react hook", isCompleted: false },
    //{ text: "leaning styling in react", isCompleted: false }
  //]);

  //const [todos, setTodos] = useState(
    //JSON.parse(localStorage.getItem("todos")) || []
  //);

  const [todos, setTodos] = useStateWithLocalStorage("todos");
  const [showAdd, setShowAdd] = useState(false);

  //useEffect(() => {
  //localStorage.setItem("todos", JSON.stringify(todos));
 // }, //[todos]);

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
