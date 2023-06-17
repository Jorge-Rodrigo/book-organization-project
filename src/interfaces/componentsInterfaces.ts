import { iBook } from "./bookInterfaces";

export interface iButtonProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  buttonVar: string;
}
export interface iButtonStyledProps {
  buttonVariation?: string;
}

export interface iBookCardProps {
  book: iBook;
}
