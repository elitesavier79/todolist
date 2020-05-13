import React from "react";
import PropTypes from "prop-types";

import Todo from "./todo";

const Todos = ({ todos }) => {
  return (
    <section className="todos">
      {todos.map(todo => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

Todos.propTypes = {
  todos : PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  )
};

export default Todos;
