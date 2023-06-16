import { iBookCardProps } from "../../interfaces/componentsInterfaces";
import { Button } from "../button";

export const BookCard = ({ book }: iBookCardProps) => {
  return (
    <li key={book.title}>
      <img src={book.imgCover} alt={`capa do ${book.title}`} />
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <p>{book.genre}</p>
      <div>
        <Button type="button">Ver detalhes</Button>
        <Button type="button">remover</Button>
      </div>
    </li>
  );
};
