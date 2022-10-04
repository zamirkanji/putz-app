import { DefaultTheme, createGlobalStyle } from "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme {
        primaryColor: string;
        secondaryColor: string;
    }
}

export const lightTheme: DefaultTheme = {
    primaryColor: 'white',
    // secondaryColor: '#11151c'
    secondaryColor: 'black'
}

export const darkTheme: DefaultTheme = {
    primaryColor: 'black',
    secondaryColor: 'white'
}

export const iconTheme: DefaultTheme = {
    primaryColor: 'white',
    secondaryColor: 'white'
}

export const cardTheme: DefaultTheme = {
    primaryColor: '#2473a8',
    secondaryColor: 'black'
}

export const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        // overflow: auto;
        // min-height: 100vh;
    }

    h1, h2, h3 {
        font-weight: 600;
        letter-spacing: 1px;
        color: #34aeff;
    }
`