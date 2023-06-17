import { styled } from "styled-components";

export const Container = styled.div`
  .container {
    max-width: 1100px;
    padding: 30px 30px;
    height: 100vh;
    margin: 0 auto;
  }
  .containerBooks {
    max-width: 1100px;
    padding: 30px 30px;
    height: 100vh;
    margin: 0 auto;
    @media (min-width: 700px) {
      height: 1230px;
    }
  }
  background-color: var(--color-bg);
`;
