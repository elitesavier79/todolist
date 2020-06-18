import React from "react";
import Paper from "../components/paper/paperClass";
import Header from "../components/header/headerClass";
import Todoform from "../components/todoform/todoformClass";
import Todos from "../components/todos/todosClass";

import Container from "../layout/container";

class Todolist extends React.Component {
  state = {
    todos: [
      { text: "leaning react", isCompleted: false },
      { text: "leaning react hook", isCompleted: false },
      { text: "leaning styling in react", isCompleted: false }
    ],
    showAdd: false
  };

  addTodo = value => {
    const { todos } = this.state;

    if (todos.length < 8) {
      const addedTodo = [...todos, { text: value, isCompleted: false }];
      this.setState({
        todos: addedTodo
      });
    } else {
      alert("only 8 todos isi allowed");
    }
  };

  completeTodo = index => {
    const addedTodo = [...this.state.todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;
    this.setState({
      todos: addedTodo
    });
  };

  clearTodos = () => {
    if (this.state.showAdd) {
      alert("finish add todo before clear");
    }
    this.setState({
      todos: []
    });
  };

  showAddToggle = () => {
    this.setState(prevState => ({ showAdd: !prevState.showAdd }));
  };

  render() {
    const { todos, showAdd } = this.state;
    return (
      <Paper>
        <Container
          FlexDirection="column"
          justifyContent="space-between"
          height="100%"
        >
          <Header
            showAddToggle={this.showAddToggle}
            showAdd={showAdd}
            clearTodos={this.clearTodos}
          />
          <Todoform addTodo={this.addTodo} showAdd={showAdd} />
          <Todos todos={todos} completeTodo={this.completeTodo} />
        </Container>
      </Paper>
    );
  }
}

export default Todolist;
