import { iBook } from "../interfaces/bookInterfaces";
import coverDomQuixote from "../assets/booksCover/dom_quixote.png";
import coverEnsaio from "../assets/booksCover/ensaio.png";
import coverMemorias from "../assets/booksCover/memorias.jpg";
import coverMobyDick from "../assets/booksCover/moby-dick.png";

const bookList: iBook[] = [
  {
    title: "Dom Quixote",
    author: "Miguel de Cervantes",
    description:
      " livro surgiu em um período de grande inovação e diversidade por parte dos escritores ficcionistas espanhóis. Parodiou romances de cavalaria que gozaram de imensa popularidade no período e, na altura, já se encontravam em declínio",
    year: 1952,
    genre: "Aventura",
    imgCover: coverDomQuixote,
  },
  {
    title: "Ensaio sobre a Cegueira",
    author: "José Saramago",
    description:
      "Este é um livro francamente terrível com o qual eu quero que o leitor sofra tanto como eu sofri ao escrevê-lo. Nele se descreve uma longa tortura. É um livro brutal e violento e é simultaneamente uma das experiências mais dolorosas da minha vida. São 300 páginas de constante aflição. Através da escrita, tentei dizer que não somos bons e que é preciso que tenhamos coragem para reconhecer isso.",
    year: 1995,
    genre: "romance",
    imgCover: coverEnsaio,
  },
  {
    title: "Memórias póstumas de Brás Cubas",
    author: "Machado de Assis",
    description:
      "Essa é uma obra muito importante na literatura universal. No Brasil tem especial relevância por ter sido a que inaugura o movimento realista no país. Foi lançada pela primeira vez em 1881 pelo carioca Machado de Assis e inovou a forma de narrativa ao trazer como protagonista um personagem que conta sua vida após a morte, um ",
    year: 1881,
    genre: "Romance",
    imgCover: coverMemorias,
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    description:
      "Na época, o livro não agradou a crítica nem o público, e a carreira do autor entrou em declínio. Décadas depois da sua morte, Moby Dick passou a ser encarado como um dos grandes romances norte-americanos. Passado no mar, o livro conta a história de um navio baleeiro que persegue e ataca várias vezes um cachalote sem conseguir matá-lo. Com descrições sobre a caça de baleias e a obsessão pelo animal, a obra também problematiza temas como a divisão de classes e até a existência de Deus.",
    year: 1851,
    genre: "Aventura",
    imgCover: coverMobyDick,
  },
];

export default bookList;
