import styled from "styled-components";

export const ModalMain = styled.main`
  h1 {
    color: var(--color-black);
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    span {
      color: var(--color-black);
      padding: 5px 20px;
      font-size: 18px;
      text-decoration: underline;
      font-weight: 600;
    }
  }
`;
