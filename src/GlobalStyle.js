import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    ::before,
    ::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        background-color: #f3f3f3;
        overflow-x: hidden;
    }

    a {
        color: white;
        text-decoration: none;
    }

    .page {
        position: absolute;
        top: 50px;
        bottom: 0;
        left: 0;
        right: 0;
        /* background-color: pink; */
        
    }
    .main {
        position: absolute;
        top: 50px;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: white;
    }

    /* 
    */

    .page-enter {
        position: fixed;
        transform: translateX(100%);
        z-index: 999;
    }
    .page-enter-active {
        position: fixed;
        transform: translateX(0%);
        transition: transform 700ms 1200ms;
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
        position: absolute;
        transform: translateX(-100%);
        z-index: 999;
    }
    .main-enter-active {
        position: absolute;
        transform: translateX(0);
        transition: transform 700ms 1200ms;
    }
    .main-exit {
    }
    .main-exit-active {
    }

    /* clip-path: polygon(33% 0, 100% 10%, 100% 90%, 67% 100%, 0 90%, 0 10%); */

`;

export default GlobalStyle;
