import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { withTheme } from "emotion-theming";

import Button from "../button/buttonClass";
import Container from "../../layout/containerClass";
import Item from "../../layout/itemClass";

const StyledH1 = styled.h1`
  margin-top: 30px;
  text-align: center;
  color: ${props => props.theme.color.primary.blue};
  font-size: 3.6rem;
  font-family: "homemade Apple", sans-serif;
  text-transform: lowercase;
`;

class Header extends React.Component {
  render() {
    const { showAddToggle, showAdd, clearTodos, theme } = this.props;
    return (
      <section className="header-component">
        <Container alignItems="flex-start">
          <Item flex={1}>
            <Button text={showAdd ? "FINISH" : "ADD"} onClick={showAddToggle} />
          </Item>
          <Item flex={2}>
            <StyledH1 theme={theme}>Todo Lits </StyledH1>
          </Item>
          <Item flex={1} align="right">
            <Button
              text="CLEAR"
              onClick={clearTodos}
              color="red"
              align="right"
            />
          </Item>
        </Container>
      </section>
    );
  }

  static propTypes = {
    showAddToggle: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired,
    clearTodos: PropTypes.func.isRequired
  };
}

export default withTheme(Header);
