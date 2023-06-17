import { useContext } from "react";
import { Button } from "../../components/button";
import { BookContext } from "../../context/bookContext";
import { Container } from "../../styles/container";
import { MainDiv } from "./style";

export const LandingPage = () => {
  const { navigate } = useContext(BookContext);
  return (
    <Container>
      <div className="container">
        <MainDiv>
          <p>Bem vindo ao</p>
          <h1>
            <span>B</span>ook <span>O</span>rganization
          </h1>
          <Button
            buttonVar={"landing"}
            type="button"
            onClick={() => navigate("/home")}
          >
            Entrar
          </Button>
        </MainDiv>
      </div>
    </Container>
  );
};
