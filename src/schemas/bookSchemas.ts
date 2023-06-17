import { z } from "zod";

export const bookSchema = z.object({
  title: z.string().min(1, "Titulo necessário"),
  author: z.string().min(1, "Autor necessário"),
  description: z.string().min(1, "Descrição necessária"),
  year: z.string().min(1, "Ano necessário"),
  genre: z.string().min(1, "Gênero necessário"),
  imgCover: z.string().min(1, "Link da Imagem necessário"),
});
