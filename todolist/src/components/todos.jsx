import React from "react";
import Todo from "./todo";

const Todos = () => {
  const todos = [
    {
      text: "belajar react di rumah aja "
    },
    {
      text: "belajar nodejs dirumah aja"
    },
    {
      text: "belajar larevel di rumah aja"
    },
    {
      text: "belajar jquery ndi rumah aja"
    },
    {
      text: "belajar jquery ndi rumah aja"
    },
    {
      text: "belajar jquery ndi rumah aja"
    }
  ];

  return (
    <section className="todos">
      {todos.map(todo => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
