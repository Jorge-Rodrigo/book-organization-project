import { iBookCardProps } from "../../interfaces/componentsInterfaces";
import { Button } from "../button";
import { CardStyled } from "./style";

export const BookCard = ({ book }: iBookCardProps) => {
  return (
    <CardStyled key={book.title}>
      <img src={book.imgCover} alt={`capa do ${book.title}`} />
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <p>{book.genre}</p>
      <div className="btnDiv">
        <Button buttonVar="cardDetail" type="button">
          Ver detalhes
        </Button>
        <Button buttonVar="cardRemove" type="button">
          remover
        </Button>
      </div>
    </CardStyled>
  );
};
