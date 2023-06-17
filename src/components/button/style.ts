import { css, styled } from "styled-components";
import { iButtonStyledProps } from "../../interfaces/componentsInterfaces";

export const ButtonStyled = styled.button<iButtonStyledProps>`
  ${({ buttonVariation }) => {
    switch (buttonVariation) {
      case "landing":
        return css`
          width: 150px;
          height: 45px;
          background-color: var(--color-bg3);
          border: 3px solid var(--color-main2);
          border-radius: 8px;
          &:hover {
            background-color: var(--color-main);
            color: var(--color-bg3);
          }
        `;
      case "books":
        return css`
          width: 150px;
          height: 45px;
          background-color: var(--color-bg3);
          border: 3px solid var(--color-main2);
          border-radius: 4px;
          &:hover {
            background-color: var(--color-main2);
            color: var(--color-bg3);
          }
        `;
      case "cardDetail":
        return css`
          width: 90px;
          height: 45px;
          background-color: var(--color-bg3);
          border: 3px solid var(--color-main2);
          border-radius: 4px;
          &:hover {
            background-color: var(--color-bg2);
            color: var(--color-main);
          }
        `;
      case "cardRemove":
        return css`
          width: 80px;
          height: 45px;
          background-color: var(--color-main2);
          border: 3px solid var(--color-bg3);
          color: var(--color-bg3);
          border-radius: 4px;
          &:hover {
            background-color: var(--color-main);
          }
        `;
    }
  }}
`;
