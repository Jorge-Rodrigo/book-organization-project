import { createContext, useEffect, useState } from "react";
import {
  iBook,
  iBookContext,
  iBookContextProps,
} from "../interfaces/bookInterfaces";
import allBooks from "../booksData";

export const BookContext = createContext({} as iBookContext);

export const BookProvider = ({ children }: iBookContextProps) => {
  const [bookList, setBookList] = useState<iBook[] | null>(null);
  const [modalOn, setModalOn] = useState(false);

  useEffect(() => {
    if (bookList === null) {
      setBookList(allBooks);
    }
  }, [bookList]);

  const addBook = (data: iBook) => {
    setBookList([...bookList!, data]);
    setModalOn(false);
  };
  const removeBook = (title: string) => {
    const filterBook = bookList?.filter((book) => book.title !== title);
    setBookList(filterBook!);
    setModalOn(false);
  };

  return (
    <BookContext.Provider
      value={{ bookList, setModalOn, modalOn, addBook, removeBook }}
    >
      {children}
    </BookContext.Provider>
  );
};
