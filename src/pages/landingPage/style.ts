import { styled } from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 180px 50px 0px 50px;
  p {
    font-size: 20px;
    color: var(--color-main);
  }
  h1 {
    color: var(--color-main2);
    font-size: 45px;
    font-weight: bolder;
    margin-bottom: 55px;
    span {
      color: var(--color-black);
    }
  }
`;
