import styled from "styled-components";

export const ModalMain = styled.main`
  h1 {
    color: var(--color-black);
    text-align: center;
  }
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      text-align: center;
      color: var(--color-main2);
      font-size: 25px;
      padding: 18px 50px;
    }
    p {
      text-align: center;
      color: var(--color-black);
      font-size: 20px;
      padding: 15px 15px;
      border: 3px solid var(--color-main2);
      width: 80%;
      border-radius: 19px;
    }
  }
`;
