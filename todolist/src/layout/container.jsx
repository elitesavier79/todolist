import React form "react";
import { jsx, css } from "@emotion/core";
import PropTypes from "prop-types";


const Container = ({ children, flexDirection, justifyContent, alignItems, alignContent }) => {
	const containerStyles = css`
		display: flex;
		flex-direction: ${flexDirection};
		flex-warp: ${flexWrap};
		justify-content: ${justifyContent};
		align-items: ${alignItems};
		align-content: ${alignContent};


	`;

	return (
	 <div className="flex-container" css={containerStyles}>{children}</div>

	);
};

Container.defaultProps = {
	flexDirection: "row",
	flexWrap: "nowrap",
	justifyContent: "flex-start",
	alignItems:"stretch",
	alignContent: "stretch"

};

Container.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),

	flexDirection: PropTypes.oneOF([
		"row",
		"row-reverse",
		"column",
		"column-reverse"
	]),

	flexWrap: PropTypes.oneOF([
		"nowrap",
		"wrap",
		"wrap-reverse"
	]),

	justifyContent: PropTypes.oneOF([
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

	alignItems: PropTypes.oneOF([
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

	alignContent: PropTypes.oneOF([
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
		
	])
};


export default Container;