import { useContext } from "react";
import { Button } from "../../components/button";
import { BookContext } from "../../context/bookContext";
import { BookCard } from "../../components/bookCard";
import { Container } from "../../styles/container";
import { MainDiv } from "./style";

export const HomePage = () => {
  const { bookList } = useContext(BookContext);
  return (
    <Container>
      <div className="containerBooks">
        <MainDiv>
          <div className="titleInfo">
            <h1>
              <span>B</span>ook <span>O</span>rganization
            </h1>

            <Button buttonVar="books" type="button">
              Adicionar um livro!
            </Button>
          </div>
          <ul className="bookList">
            {bookList && bookList.map((book) => <BookCard book={book} />)}
          </ul>
        </MainDiv>
      </div>
    </Container>
  );
};
