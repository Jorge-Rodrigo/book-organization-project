import { useContext } from "react";
import { Button } from "../../components/button";
import { BookContext } from "../../context/bookContext";

export const LandingPage = () => {
  const { navigate } = useContext(BookContext);
  return (
    <div>
      <p>Bem vindo ao</p>
      <h1>Book Organization</h1>
      <Button type="button" onClick={() => navigate("/home")}>
        Entrar
      </Button>
    </div>
  );
};
