import React from "react";
import PropTypes from "prop-types";
import Button from './button';

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  return (
    <section className="header">
      
      <Button text={showAdd ? 'FINISH' : 'ADD'} onClick={showAddToggle} />
      <h1 className="header-title">Todo Lits</h1>
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
