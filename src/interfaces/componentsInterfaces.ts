import { UseFormRegisterReturn } from "react-hook-form";
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
  active: (style: string, book?: iBook) => void;
}

export interface iModalProps {
  setOff: React.Dispatch<React.SetStateAction<boolean>>;
  style: string;
  book?: iBook | null;
}

export interface iModalBookDetailProps {
  book: iBook | null | undefined;
}

export interface iFormProps {
  children: React.ReactNode;
  sub: (data: any) => void;
}

export interface iInputProps {
  label?: string;
  type: string;
  placeholder?: string;
  id: string;
  register?: UseFormRegisterReturn<string>;
  disable?: boolean;
  value?: string;
}
