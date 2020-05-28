/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "emotion-theming";

//import styles from "./todoform.module.css";
import * as styles from "./todoform.styles";

const Todoform = ({ addTodo, showAdd }) => {
  const [value, setValue] = React.useState("");
  const theme = useTheme();

  const handleFormSubmit = e => {
    e.preventDefault();

    if (!value) {
      alert("no blank text!");
      return;
    }

    if (value.length > 35) {
      alert("Please create a shorter text");
      setValue("");
      return;
    }

    addTodo(value);
    setValue("");
  };

  if (showAdd) {
    return (
      //<section className={styles.add}>
        //<form className={styles.addForm} onSubmit={handleFormSubmit}>
          //<input
            //type="text"
            //className={styles.addInput}
            //value={value}
            //onChange={e => setValue(e.target.value)}
          ///>
          //<button className={styles.addBtn}>Add</button>
        //</form>
      //</section>

      <section css={styles.add}>
        <form css={styles.addForm} onSubmit={handleFormSubmit}>
          <input 
            type="text"
            css={styles.addInput({ theme })}
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button css={styles.addBtn({ theme })}>Add</button>
        </form>
      </section>
    );
  } else {
    return null;
  }
};

Todoform.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};

export default Todoform;
