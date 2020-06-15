import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { withTheme } from "emotion-theming";

import Container from "../../layout/container";
import Item from "../../layout/item";
import Button from "../button/buttonClass";

const StyledInput = styled.input`
  background: unset;
  border: unset;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.color.primary.red};
  ouline: unset;
  font-family: "homemade Apple", sans-serif;
  font-size: 16px;
  text-transform: lowercase;
`;

class Todoform extends React.Component {
  state = {
    value: ""
  };
  handleFormSubmit = e => {
    const { value } = this.state;
    const { addTodo } = this.props;
    e.preventDefault();

    if (!value) {
      alert("no blank text!");
      return;
    }

    if (value.length > 35) {
      alert("Please create a shorter text");
      this.setState({
        value: ""
      });
      return;
    }

    addTodo(value);
    this.setState({
      value: ""
    });
  };

  handleOnChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    const { showAdd, theme } = this.props;

    if (showAdd) {
      return (
        <section className="todoform-component">
          <form onSubmit={this.handleFormSubmit}>
            <Container alignItems="flex-start">
              <Item flex={1} padding="0 0 0 16px">
                <StyledInput
                  theme={theme}
                  type="text"
                  value={this.state.value}
                  onChange={this.handleOnChange}
                />
              </Item>
              <Item>
                <Button text="Add" />
              </Item>
            </Container>
          </form>
        </section>
      );
    } else {
      return null;
    }
  }

  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired
  };
}

export default withTheme(Todoform);
