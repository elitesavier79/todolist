/** @jsx jsx */

//import React from "react";
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { useTheme } from "emotion-theming";

import Button from "../button/button";
import Container from "../../layout/container";
import Item from "../../layout/item";
//import styles from './header.module.css';
import * as styles from "./header.styles";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  const theme = useTheme();

  return (
    //<section className={styles.header}>
    //<Button text={showAdd ? 'FINISH' : 'ADD'} onClick={showAddToggle} />
    //<h1 className={styles.headerTitle}>Todo Lits</h1>
    //<Button text="CLEAR" onClick={clearTodos} color="red" align="right"/>
    //</section>

    //<section css={styles.header}>
    //<Button text={showAdd ? "FINISH" : "ADD"} onClick={showAddToggle} />
    //<h1 css={styles.headerTitle(theme)}>Todo Lits</h1>
    //<Button text="CLEAR" onClick={clearTodos} color="red" align="right" />
    //</section>

    <section className="header-component">
      <Container alignItems="flex-start">
        <Item flex={1}>
          <Button text={showAdd ? "FINISH" : "ADD"} onClick={showAddToggle} />
        </Item>
        <Item flex={2}>
          <h1 css={styles.headerTitle(theme)}>Todo Lits</h1>
        </Item>
        <Item flex={1} align="right">
          <Button text="CLEAR" onClick={clearTodos} color="red" align="right" />
        </Item>
      </Container>
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
