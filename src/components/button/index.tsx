import { iButtonProps } from "../../interfaces/componentsInterfaces";

export const Button = ({ children, type, onClick }: iButtonProps) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};
