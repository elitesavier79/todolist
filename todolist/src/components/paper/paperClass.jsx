import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { withTheme } from "emotion-theming";

const StyledPaper = styled.div`
  width: 600px;
  height: 700px;
  background-color: ${props => props.theme.background.color.primary};
  border-radius: 5px;
  padding: 35px;
`;

const StyledKerangka = styled.div`
  border: 1px solid ${props => props.theme.color.primary.black};
  height: 100%;
`;

class Paper extends React.Component {
  render() {
    const { children, theme } = this.props;
    return (
      <StyledPaper theme={theme}>
        <StyledKerangka theme={theme}>{children}</StyledKerangka>
      </StyledPaper>
    );
  }

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };
}

export default withTheme(Paper);
