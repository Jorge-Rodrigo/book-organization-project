import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family:'Inter', sans-serif;
        src: url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
    }

   *{
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
    font-family:'Inter', sans-serif;
    }

    button{
        cursor: pointer;
    }
    :root{
        --color-bg: #ffe6b3;
        --color-bg2:#ffeecc;
        --color-bg3:#ffc34d;
        --color-main:#cc0000;
        --color-main2:#b30000;
        --color-black: #000000;
    }
`;
