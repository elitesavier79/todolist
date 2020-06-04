import { css } from "@emotion/core";

export const paper = ({ theme }) =>
  css`
    width: 600px;
    height: 700px;
    background-color: ${theme.background.color.primary};
    border-radius: 5px;
    padding: 35px;
  `;

export const kerangka = ({ theme }) =>
  css`
    
    border: 1px solid ${theme.color.primary.black};
    height: 100%;
  `;
  
/*display: flex;
    flex-direction: column;
    justify-content: space-between;*/