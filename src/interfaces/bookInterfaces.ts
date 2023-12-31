export interface iBookContext {
  bookList: iBook[] | null;
  modalOn: boolean;
  setModalOn: React.Dispatch<React.SetStateAction<boolean>>;
  addBook: (data: iBook) => void;
  removeBook: (title: string) => void;
}

export interface iBookContextProps {
  children: React.ReactNode;
}

export interface iBook {
  title: string;
  author: string;
  description: string;
  year: string;
  genre: string;
  imgCover: string;
}
