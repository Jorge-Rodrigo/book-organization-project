import { useContext, useState } from "react";
import { Button } from "../../components/button";
import { BookContext } from "../../context/bookContext";
import { BookCard } from "../../components/bookCard";
import { Container } from "../../styles/container";
import { MainDiv } from "./style";
import { Modal } from "../../components/modal";
import { iBook } from "../../interfaces/bookInterfaces";

export const HomePage = () => {
  const { bookList, modalOn, setModalOn } = useContext(BookContext);
  const [style, setStyle] = useState("");
  const [book, setBook] = useState<iBook | null>(null);

  const activeModal = (style: string, book?: iBook) => {
    setStyle(style);
    setModalOn(true);
    if (book) {
      setBook(book);
    }
  };
  return (
    <>
      {modalOn && <Modal setOff={setModalOn} style={style} book={book} />}
      <Container>
        <div className="containerBooks">
          <MainDiv>
            <div className="titleInfo">
              <h1>
                <span>B</span>ook <span>O</span>rganization
              </h1>

              <Button
                buttonVar="books"
                type="button"
                onClick={() => activeModal("addBook")}
              >
                Adicionar um livro!
              </Button>
            </div>
            <ul className="bookList">
              {bookList &&
                bookList.map((book) => (
                  <BookCard book={book} active={activeModal} />
                ))}
            </ul>
          </MainDiv>
        </div>
      </Container>
    </>
  );
};
