import React from "react";
import Paper from "../components/paper";
import Header from "../components/header";
import Todoform from "../components/todoform";
import Todos from "../components/todos";

const Todolist = () => {
  return (
    <Paper>
      <Header />
      <Todoform />
      <Todos />
    </Paper>
  );
};

export default Todolist;