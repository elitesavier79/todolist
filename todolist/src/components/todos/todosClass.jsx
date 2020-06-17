import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import Todo from "../todo/todoClass";
import Container from "../../layout/container";

const StyledTodoText = styled.div`
  font-family: "homemade Apple", sans-serif;
  font-size: 24px;
  text-align: center;
  padding: 16px;
`;

const StyledSpanText = styled.span`
  font-family: "bungee", sans-serif;
  font-size: 24px;
  color: orange;
`;

class Todos extends React.Component {
  render() {
    const { todos, completeTodo } = this.props;
    return (
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
            <StyledTodoText>
              {[
                "Silakan mengklik tombol",
                <StyledSpanText> add </StyledSpanText>,
                "atas untuk memulai Todo"
              ]}
            </StyledTodoText>
          )}
        </Container>
      </section>
    );
  }

  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string
      })
    ),
    completeTodo: PropTypes.func.isRequired
  };
}

export default Todos;
