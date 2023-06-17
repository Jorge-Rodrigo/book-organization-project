import { createContext, useEffect, useState } from "react";
import {
  iBook,
  iBookContext,
  iBookContextProps,
} from "../interfaces/bookInterfaces";
import { useNavigate } from "react-router-dom";
import allBooks from "../booksData";

export const BookContext = createContext({} as iBookContext);

export const BookProvider = ({ children }: iBookContextProps) => {
  const [bookList, setBookList] = useState<iBook[] | null>(null);
  const [modalOn, setModalOn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (bookList === null) {
      setBookList(allBooks);
    }
  }, [bookList]);

  const addBook = (data: iBook) => {
    setBookList([...bookList!, data]);
    setModalOn(false);
  };

  return (
    <BookContext.Provider
      value={{ bookList, navigate, setModalOn, modalOn, addBook }}
    >
      {children}
    </BookContext.Provider>
  );
};
