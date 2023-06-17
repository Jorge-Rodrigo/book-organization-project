import { styled } from "styled-components";

export const MainDiv = styled.div`
  .titleInfo {
    padding: 15px;
    border: 3px solid var(--color-main2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--color-bg2);
    gap: 20px;
    margin-bottom: 25px;
    h1 {
      color: var(--color-main2);
      font-size: 35px;
      font-weight: bolder;
      span {
        color: var(--color-black);
      }
    }
  }
  .bookList {
    display: flex;
    width: 100%;
    height: 400px;
    flex-direction: row;
    overflow-x: auto;
    gap: 55px;
    @media (min-width: 800px) {
      flex-wrap: wrap;
      height: 900px;
      gap: 35px;
    }
  }
`;
