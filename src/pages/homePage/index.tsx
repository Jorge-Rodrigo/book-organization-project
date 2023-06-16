import { useContext } from "react";
import { Button } from "../../components/button";
import { BookContext } from "../../context/bookContext";
import { BookCard } from "../../components/bookCard";
import bookList from "../../booksData";

export const HomePage = () => {
  const { navigate } = useContext(BookContext);
  return (
    <div>
      <h1>Book Organization</h1>
      <p>O lugar onde seus livros estão organizados</p>
      <Button type="button">Adicionar um livro!</Button>
      <ul>
        {bookList.map((book) => (
          <BookCard book={book} />
        ))}
      </ul>
    </div>
  );
};
