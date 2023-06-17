import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../input";
import { ModalMain } from "./style";
import { useContext } from "react";
import { BookContext } from "../../../context/bookContext";
import Form from "../../form";
import { bookSchema } from "../../../schemas/bookSchemas";
import { iBook } from "../../../interfaces/bookInterfaces";
import { Button } from "../../button";

export const ModalAddBook = () => {
  const { addBook } = useContext(BookContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iBook>({
    resolver: zodResolver(bookSchema),
  });

  const onHandleSubmit: SubmitHandler<iBook> = (data) => {
    addBook(data);
    reset();
  };

  return (
    <ModalMain>
      <h1>Adicionar Livro</h1>
      <Form sub={handleSubmit(onHandleSubmit)}>
        <Input
          label={"Nome do Livro"}
          type={"text"}
          placeholder={"Digite o Nome do livro"}
          id={"title"}
          register={register("title")}
        />
        {errors.title ? <span>{errors.title.message}</span> : <></>}

        <Input
          label={"Nome do Autor"}
          type={"text"}
          placeholder={"Digite o Nome do Autor do Livro"}
          id={"author"}
          register={register("author")}
        />
        {errors.author ? <span>{errors.author.message}</span> : <></>}

        <Input
          label={"Descrição do Livro"}
          type={"text"}
          placeholder={"Digite a Descrição"}
          id={"description"}
          register={register("description")}
        />
        {errors.description ? <span>{errors.description.message}</span> : <></>}

        <Input
          label={"Ano do Lançamento"}
          type={"number"}
          placeholder={"Digite o Ano do Lançamento"}
          id={"year"}
          register={register("year")}
        />
        {errors.year ? <span>{errors.year.message}</span> : <></>}

        <Input
          label={"Gênero do Livro"}
          type={"text"}
          placeholder={"Digite o Gênero do Livro"}
          id={"genre"}
          register={register("genre")}
        />
        {errors.genre ? <span>{errors.genre.message}</span> : <></>}

        <Input
          label={"Imagem de Capa do Livro"}
          type={"text"}
          placeholder={"Digite o Link da Imagem"}
          id={"imgCover"}
          register={register("imgCover")}
        />
        {errors.imgCover ? <span>{errors.imgCover.message}</span> : <></>}

        <div>
          <Button type="submit" buttonVar="books">
            Adicionar
          </Button>
        </div>
      </Form>
    </ModalMain>
  );
};
