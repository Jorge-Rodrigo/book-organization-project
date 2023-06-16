export interface iBookContext {
  bookList: iBook[] | null;
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
}
