import styled from "styled-components";

export const FieldStyled = styled.fieldset`
  width: 100%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border: none;
  label {
    color: var(--color-main2);
    font-size: 20px;
  }
  input {
    background-color: transparent;
    color: var(--color-white);
    border: 2px solid var(--color-main2);
    width: 70%;
    height: 45px;
    border-radius: 12px;
    padding: 10px;
    outline: none;
    font-size: 20px;
    :focus {
      border: 2px solid var(--color-white);
    }
    ::placeholder {
      font-size: 20px;
      color: var(--color-white);
    }
    @media (min-width: 700px) {
      width: 75%;
    }
  }
`;
