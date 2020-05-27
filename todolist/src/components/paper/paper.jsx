/** @jsx jsx */ 
//import React from "react";
import { jsx } from '@emotion/core'
import PropTypes from "prop-types";
import { useTheme } from "emotion-theming";

//import styles from './paper.module.css';
import * as styles from './paper.styles';

const Paper = ({ children }) => {
 const theme = useTheme();
  return (
    <div css={styles.paper({ theme })}>
      <div css={styles.kerangka({ theme })}>{children}</div>
    </div>
  );
};

Paper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Paper;
