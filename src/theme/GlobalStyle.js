import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    ::before,
    ::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background: #454359; 
    }

    ::-webkit-scrollbar-thumb {
        background: #56546a; 
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #67657b; 
    }

    :root {
        font-size: 62.5%;
    }

    body {
        background-color: #34333b;
        color: white;
        overflow-x: hidden;
    }

    a {
        color: white;
        text-decoration: none;
    }

    .home, .project {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .home-enter {
        position: fixed;
        transform: translateX(-100%);
        z-index: 998;
    }

    .home-enter-active {
        position: fixed;
        transform: translateX(0);
        transition: transform 700ms 200ms ;
    }

    .project-enter {
        position: fixed;
        transform: translateX(100%);
        z-index: 998;
    }

    .project-enter-active {
        position: fixed;
        transform: translateX(0%);
        transition: transform 700ms 200ms ;
    }
`;

export default GlobalStyle;
