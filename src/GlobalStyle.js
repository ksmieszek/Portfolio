import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    ::before,
    ::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* font-family: 'Segoe UI', sans-serif; */
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    /* ::-webkit-scrollbar {
        width: 5px;

    }

    ::-webkit-scrollbar-track {
        background: white; 
    }

    ::-webkit-scrollbar-thumb {
        background: #454359; 
        background: transparent; 
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #56546a; 
    } */

    :root {
    font-size: 62.5%;
    }

    body {
        /* background-color: #f3f3f3; */
        overflow-x: hidden;
        color: white;
    }

    a {
        color: white;
        text-decoration: none;
    }

    .page {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .main {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    /* 
    */

    .page-enter {
        
        position: fixed;
        transform: translateX(100%);
        z-index: 998;
    }
    .page-enter-active {
        position: fixed;
        transform: translateX(0%);
        transition: transform 700ms 200ms ;
    }
    .page-enter-done {
    }
    .page-exit {
    }
    .page-exit-active {
    }

    /* 
    */

    .main-enter {
        position: fixed;
        transform: translateX(-100%);
        z-index: 998;
    }
    .main-enter-active {
        position: fixed;
        transform: translateX(0);
        transition: transform 700ms 200ms ;
    }
    .main-exit {
    }
    .main-exit-active {
    }
`;

export default GlobalStyle;
