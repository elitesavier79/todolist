import React, { useState } from "react";

import Paper from "../components/paper";
import Header from "../components/header";
import Todoform from "../components/todoform";
import Todos from "../components/todos";

const Todolist = () => {
  const [todos, setTodos] = useState([
    { text: "leaning react", isCompleted: false },
    { text: "leaning react hook", isCompleted: false },
    { text: "leaning styling in react", isCompleted: false }
  ]);

  const [showAdd, setShowAdd] = useState(false);

  const addTodo = value => {
    if(todos.length < 10){
    const addedTodo = [...todos, { text: value, isCompleted: false }];
    setTodos(addedTodo);
    } else {
      alert("only 10 todos isi allowed")
    }
  };

  const completeTodo = index => {
    const addedTodo = [... todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;
    setTodos(addedTodo);

  };
  const showAddToggle = () => setShowAdd(!showAdd);

console.log("todos", todos);

  return (
    <Paper>
      <Header showAddToggle={showAddToggle} showAdd={showAdd} />
      <Todoform addTodo={addTodo} showAdd={showAdd} />
      <Todos todos={todos} completeTodo={completeTodo} />
    </Paper>
  );
};

export default Todolist;
