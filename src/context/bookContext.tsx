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
  const navigate = useNavigate();

  useEffect(() => {
    if (allBooks.length > 0) {
      setBookList(allBooks);
    }
  }, [bookList]);

  return (
    <BookContext.Provider value={{ bookList, navigate }}>
      {children}
    </BookContext.Provider>
  );
};
