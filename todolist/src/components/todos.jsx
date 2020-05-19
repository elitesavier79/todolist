import React from "react";
import PropTypes from "prop-types";

import Todo from "./todo";

const Todos = ({ todos, completeTodo }) => {
  return (
    <section className="todos">
      {todos.length > 0 &&
        todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              text={todo.text}
              isCompleted={todo.isCompleted}
              completeTodo={completeTodo}
              index={index}
            />
          );
        })}
      {todos.length === 0 && (
        <div className="todos-text">
          Silakan mengklik tombol {" "} <span className="span-text">add</span> di atas
          untuk Memulai
        </div>
      )}
    </section>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  ),
  completeTodo: PropTypes.func.isRequired
};

export default Todos;
