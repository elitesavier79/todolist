import React from "react";
import PropTypes from "prop-types";

import styles from "./button.module.css";
import bt from "classnames";

const Button = ({ text, onClick, color, align }) => {
	//const className = [
	//'header-btn',
	//color === "black" && "main-black-color",
	//color === "red" && "main-red-color",
	//align === "left" && "align-left",
	//align === "right" && "align-right"

	//].join(" ");

	const classNames = bt(styles.headerBtn, {
		[styles.mainRedColor]: color === 'red',
		[styles.mainBlackColor]: color === 'black',
		[styles.alignLeft]: align === 'left',
		[styles.alignRight]: align === 'right'
		
	})

	return (
		<button className={classNames} onClick={onClick}>
		{text}
		</button>
	);
};

Button.defaultProps = {
	text: "button",
	color: "black",
	align: "left"
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	color: PropTypes.oneOf(['back', 'red']),
	align: PropTypes.oneOf(['left', 'right'])
};

export default Button;