import { useContext } from "react";
import { BookContext } from "../../context/bookContext";
import { iModalProps } from "../../interfaces/componentsInterfaces";
import { Button } from "../button";
import { ModalAddBook } from "./modalAddBook";
import { ModalBookDetail } from "./modalDetailBook";
import { MainDiv, ModalContainer, ModalMain } from "./style";

export const Modal = ({ setOff, style, book }: iModalProps) => {
  window.scrollTo(0, 0);
  const { removeBook } = useContext(BookContext);

  return (
    <ModalContainer>
      <MainDiv>
        <ModalMain>
          <div className="closeModal">
            <button onClick={() => setOff(false)}>X</button>
          </div>
          {style === "addBook" && <ModalAddBook />}
          {style === "detailBook" && <ModalBookDetail book={book} />}
          {style === "removeBook" && book && (
            <div className="removeBook">
              <h2>Tem certeza que quer remover o livro?</h2>
              <Button
                type="button"
                buttonVar="cardRemove"
                onClick={() => removeBook(book.title)}
              >
                Remover
              </Button>
            </div>
          )}
        </ModalMain>
      </MainDiv>
    </ModalContainer>
  );
};
