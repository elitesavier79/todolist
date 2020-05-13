import React, { useState } from "react";

import Paper from "../components/paper";
import Header from "../components/header";
import Todoform from "../components/todoform";
import Todos from "../components/todos";

const Todolist = () => {
  const [todos, setTodos] = useState([
    { text: "leaning react" },
    { text: "leaning react hook" },
    { text: "leaning refactor in react" }
  ]);

  return (
    <Paper>
      <Header />
      <Todoform />
      <Todos todos={todos} />
    </Paper>
  );
};

export default Todolist;
