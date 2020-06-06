import { css } from "@emotion/core";

//export const add = () =>
//css`
//padding: 16px;
//`;

//export const addForm = () =>
//css`
// display: flex;
//align-items: flex-start;
//`;
export const addInput = ({ theme }) =>
  css`
    background: unset;
    border: unset;
   
    width: 100%;
   
    border-bottom: 1px solid ${theme.color.primary.red};
    ouline: unset;
    font-family: "homemade Apple", sans-serif;
    font-size: 16px;
    text-transform: lowercase;
  `;
   /*padding: 0 64px;*/
 /*flex: 1;*/
/*export const addBtn = ({ theme }) =>
  css`
    font-size: 1.8rem;
    font-family: "bungee", sans-serif;
    padding: 16px;
    padding-right: unset;
    cursor: pointer;
    background: unset;
    background: unset;
    border: unset;
    outline: unset;
    &:active {
      text-shadow: 1px 1px 2px ${theme.color.primary.black};
    }
    `;
*/
