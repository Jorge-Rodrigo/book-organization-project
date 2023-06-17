// import { ModalEditContact } from "./modalEditContact";
// import { ModalEditUser } from "./modalEditUser";
import { iModalProps } from "../../interfaces/componentsInterfaces";
import { ModalAddBook } from "./modalAddBook";
import { MainDiv, ModalContainer, ModalMain } from "./style";

export const Modal = ({ setOff, style }: iModalProps) => {
  return (
    <ModalContainer>
      <MainDiv>
        <ModalMain>
          <div className="closeModal">
            <button onClick={() => setOff(false)}>X</button>
          </div>
          {style === "addBook" && <ModalAddBook />}
          {/* {style === "detailBook" && <ModalEditContact book={infoModal} />}
          {style === "removeBook" && <ModalEditUser />} */}
        </ModalMain>
      </MainDiv>
    </ModalContainer>
  );
};
