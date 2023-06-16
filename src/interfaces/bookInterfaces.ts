import { NavigateFunction } from "react-router-dom";

export interface iBookContext {
  bookList: iBook[] | null;
  navigate: NavigateFunction;
}

export interface iBookContextProps {
  children: React.ReactNode;
}

export interface iBook {
  title: string;
  author: string;
  description: string;
  year: number;
  genre: string;
  imgCover: string;
}
