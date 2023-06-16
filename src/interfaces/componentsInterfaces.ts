import { iBook } from "./bookInterfaces";

export interface iButtonProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
}

export interface iBookCardProps {
  book: iBook;
}
