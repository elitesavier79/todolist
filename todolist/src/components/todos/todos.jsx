/** @jsx jsx */
import { jsx } from "@emotion/core";
//import React from "react";

import PropTypes from "prop-types";
import Todo from "../todo/todo";

//import styles from "./todos.module.css";
import * as styles from "./todos.styles";

const Todos = ({ todos, completeTodo }) => {
  return (
    /*<section className={styles.todos}>
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
        <div className={styles.todosText}>
          Silakan mengklik tombol <span className={styles.spanText}>add</span>{" "}
          di atas untuk memulai Todo
        </div>
      )}
    </section>*/

    <section css={styles.todos}>
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
        <div css={styles.todosText}>
          Silakan mengklik tombol <span css={styles.spanText}>add</span>{" "}
          di atas untuk memulai Todo
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
