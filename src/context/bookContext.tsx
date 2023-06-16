import { createContext, useEffect, useState } from "react";
import {
  iBook,
  iBookContext,
  iBookContextProps,
} from "../interfaces/bookInterfaces";

export const BookContext = createContext({} as iBookContext);

export const BookProvider = ({ children }: iBookContextProps) => {
  const [bookList, setBookList] = useState<iBook[] | null>(null);

  return (
    <BookContext.Provider value={{ bookList }}>{children}</BookContext.Provider>
  );
};
