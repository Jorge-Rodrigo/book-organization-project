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
}

export interface iModalProps {
  setOff: React.Dispatch<React.SetStateAction<boolean>>;
  style: string;
  // infoModal?: tContactReponse | tUserReponse | null;
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
