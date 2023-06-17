import { iButtonProps } from "../../interfaces/componentsInterfaces";
import { ButtonStyled } from "./style";

export const Button = ({
  children,
  type,
  onClick,
  buttonVar,
}: iButtonProps) => {
  return (
    <ButtonStyled buttonVariation={buttonVar} type={type} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};
