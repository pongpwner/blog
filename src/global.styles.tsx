import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    }
    /* html{
     //   font-size: 62.5%;
    } */
    ul,ol{
        list-style-type: none;
    }
`;

export default GlobalStyle;
