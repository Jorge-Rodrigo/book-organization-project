import { iModalBookDetailProps } from "../../../interfaces/componentsInterfaces";
import { ModalMain } from "./style";

export const ModalBookDetail = ({ book }: iModalBookDetailProps) => {
  return (
    <ModalMain>
      <h1>{book?.title}</h1>
      <section>
        <h3>Autor do livro</h3>
        <p>{book?.author}</p>

        <h3>Ano de Lançamento</h3>
        <p>{book?.year}</p>

        <h3>Gênero do Livro</h3>
        <p>{book?.genre}</p>

        <h3>Descrição</h3>
        <p>{book?.description}</p>
      </section>
    </ModalMain>
  );
};
