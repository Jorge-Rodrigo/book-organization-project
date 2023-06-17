import { z } from "zod";
const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const bookSchema = z.object({
  title: z.string().min(1, "Titulo necessário"),
  author: z.string().min(1, "Autor necessário"),
  description: z.string().min(1, "Descrição necessária"),
  year: z.string().min(1, "Ano necessário"),
  genre: z.string().min(1, "Gênero necessário"),
  imgCover: z.string().min(1, "Link da Imagem necessário"),
});
