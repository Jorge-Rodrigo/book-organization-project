import { styled } from "styled-components";

export const CardStyled = styled.li`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  display: flex;
  min-width: 50%;
  height: 100%;
  gap: 10px;
  img {
    width: 100%;
    height: 60%;
  }
  h2 {
    font-size: 18px;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: var(--color-black);
  }
  h3 {
    color: var(--color-main2);
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  p {
    background-color: var(--color-bg3);
    padding: 8px;
    color: var(--color-main2);
    border-radius: 8px;
  }
  .btnDiv {
    display: flex;
    gap: 5px;
  }
  @media (min-width: 600px) {
    min-width: 30%;
    height: 100%;
  }
  @media (min-width: 800px) {
    min-width: 0;
    width: 20%;
    height: 45%;
    img {
      width: 150px;
      height: 60%;
    }
  }
`;
