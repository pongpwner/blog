import { createGlobalStyle } from "styled-components";
import COLORS from "./colors";
const { primary1, primary2, secondary1 } = COLORS;
const GlobalStyle = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    html{
        font-size: 62.5%;
        color:#F7F7F7;
        background-color: ${primary1};
    }
    ul,ol{
        list-style-type: none;
    }
`;

export default GlobalStyle;
