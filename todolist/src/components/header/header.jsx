import React from "react";
import PropTypes from "prop-types";
import Button from '../button/button';

import styles from './header.module.css';

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  return (
    <section className={styles.header}>
      
      <Button text={showAdd ? 'FINISH' : 'ADD'} onClick={showAddToggle} />
      <h1 className={styles.headerTitle}>Todo Lits</h1>
      <Button text="CLEAR" onClick={clearTodos} color="red" align="right"/>

    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
