import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  @media (min-width: 700px) {
    height: 1233px;
  }
  height: 100%;
  width: 100%;
  background-color: rgba(51, 51, 51, 0.5);
  z-index: 10000;
`;

export const MainDiv = styled.div`
  max-width: 1100px;

  @media (min-width: 700px) {
    margin: 0 auto;
  }
`;

export const ModalMain = styled.div`
  margin: 30px auto;
  background-color: var(--color-bg);
  width: 100%;
  height: 100%;
  border: 3px solid var(--color-main2);
  border-radius: 9px;
  padding: 20px 8px;
  @media (min-width: 700px) {
    width: 50%;
  }

  .closeModal {
    display: flex;
    justify-content: flex-end;
    padding: 0 15px;

    button {
      padding: 8px 10px;
      font-size: 13px;
      font-weight: 700;
      border-radius: 100%;
      background-color: transparent;
      border: 3px solid black;
      color: var(--color-blue);
      &:hover {
        background-color: var(--color-main2);
        border: 3px solid var(--color-main2);
        color: var(--color-bg3);
      }
    }
  }
`;
