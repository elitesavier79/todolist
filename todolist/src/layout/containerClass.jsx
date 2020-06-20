import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.FlexDirection};
  flex-wrap: ${props => props.flexWrap};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  align-content: ${props => props.alignContent};
  height: ${props => props.height};
  min-height: ${props => props.minHeight};
`;
class Container extends React.Component {
  render() {
    const {
      children,
      FlexDirection,
      flexWrap,
      justifyContent,
      alignItems,
      alignContent,
      height,
      minHeight
    } = this.props;

    return (
      <StyledContainer
        FlexDirection={FlexDirection}
        flexWrap={flexWrap}
        justifyContent={justifyContent}
        alignItems={alignItems}
        alignContent={alignContent}
        height={height}
        minHeight={minHeight}
      >
        {children}
      </StyledContainer>
    );
  }

  static defaultProps = {
    FlexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
    alignContent: "stretch",
    height: "auto",
    minHeight: "initial"
  };

  static propType = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    FlexDirection: PropTypes.oneOf([
      "row",
      "row-reverse",
      "column",
      "column-reverse"
    ]),
    flexWrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
    justifyContent: PropTypes.oneOf([
      "flex-start",
      "flex-end",
      "center",
      "space-between",
      "space-around",
      "space-evenly",
      "start",
      "end",
      "left",
      "right"
    ]),
    alignItems: PropTypes.oneOf([
      "stretch",
      "flex-start",
      "flex-end",
      "center",
      "baseline",
      "first baseline",
      "last baseline",
      "start",
      "end",
      "self-start",
      "self-end"
    ]),
    alignContent: PropTypes.oneOf([
      "stretch",
      "flex-start",
      "flex-end",
      "center",
      "baseline",
      "first baseline",
      "last baseline",
      "start",
      "end",
      "space-between",
      "space-around",
      "space-evenly"
    ]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    minHeight: PropTypes.string
  };
}

export default Container;
