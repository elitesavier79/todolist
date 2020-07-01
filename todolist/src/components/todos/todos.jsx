/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//import Todo from "../todo/todo";
import Todo from "../todo/todoClass";
import Container from "../../layout/container";
import Item from "../../layout/item";

//import styles from "./todos.module.css";
import * as styles from "./todos.styles";

const Todos = ({ todos, completeTodo }) => {
  return (
    /*<section className={styles.todos}> //react hook
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
    </section>

    <section css={styles.todos}> // emotion CSS
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
          Silakan mengklik tombol <span css={styles.spanText}>add</span> di atas
          untuk memulai Todo
        </div>
      )}
    </section>*/

    <section className="todos-component">
      <Container FlexDirection="column" minHeight="400px">
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
          <React.Fragment>
            <div css={styles.todosText}>
              Silakan mengklik tombol <span css={styles.spanText}>add</span> di
              atas untuk memulai Todo
            </div>
            <Container justifyContent="center">
              <Item>
                <span css={styles.aboutPage}>
                  <Link to="/about">Or Visit Our Page</Link>
                </span>
              </Item>
            </Container>
          </React.Fragment>
        )}
      </Container>
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
