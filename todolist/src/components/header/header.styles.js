import { css } from '@emotion/core';

export const header = () => 
	css`
		  display: flex;
  		align-items: flex-start;
  		

	`;

	export const headerTitle = theme => 
		css`
			  margin-top: 40px;
  		
  			text-align: center;
  			color: ${theme.color.primary.black};
  			font-size: 3.6rem;
  			font-family: "homemade Apple", sans-serif;
  			text-transform: lowercase;

		`;

  //width: 55%;

//margin-top: -15px;