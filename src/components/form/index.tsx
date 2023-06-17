import { iFormProps } from "../../interfaces/componentsInterfaces";

const Form = ({ children, sub }: iFormProps) => {
  return <form onSubmit={sub}>{children}</form>;
};

export default Form;
