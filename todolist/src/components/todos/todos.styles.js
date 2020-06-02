import { css } from '@emotion/core';

export const todos = ( ) =>
	css`
		display: flex;
  		flex-direction: column;
  		min-height: 500px;
	`;

export const todosText = () =>
	css`
		font-family: "homemade Apple", sans-serif;
  		font-size: 24px;
  		text-align: center;
  		padding: 16px;
	`;

export const spanText = () =>
	css`
		font-family: "bungee", sans-serif;
  		font-size: 24px;
  		color: orange;
	`;