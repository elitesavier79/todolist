/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import PropTypes from "prop-types";



const Item = ({ children, flex }) => {
	return {
		<div
			className="flex-item"
			css={css`
				flex: $(flex);
		>
			{children}		`}
		</div>
	};
};

Item.propTypes = {
	children: PropTypes.oneOf([
		PropTypes.arryOf(PropTypes.node),
		PropTypes.node

	]),
	Flex: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

Export default Item;