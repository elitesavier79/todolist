/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { useTheme } from "emotion-theming";

import Button from "../button/ButtonNoJSX";
import Container from "../../layout/container";
import Item from "../../layout/item";

import * as styles from "./header.styles";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  const theme = useTheme();

  return jsx(
    "section",
    { className: "header-component" },
    jsx(
      Container,
      { alignItems: "flex-start" },
      jsx(
        // item pertama
        Item,
        { flex: 1 },
        jsx(Button, {
          text: showAdd ? "FINISH" : "ADD",
          onClick: showAddToggle
        })
      ),
      jsx(
        // item kedua
        Item,
        { flex: 2 },
        jsx("h1", { css: styles.headerTitle(theme) }, "Todo Lits")
      ),
      jsx(
        // item ketiga
        Item,
        { flex: 1, align: "right" },
        jsx(Button, {
          text: "CLEAR",
          onClick: clearTodos,
          color: "red",
          align: "right"
        })
      )
    )
  );
};
Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
