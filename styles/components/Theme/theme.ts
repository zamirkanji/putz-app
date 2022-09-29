import { StringLike } from "@firebase/util";
import { DefaultTheme, createGlobalStyle } from "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme {
        primaryColor: string;
        secondaryColor: string;
    }
}

export const lightTheme: DefaultTheme = {
    primaryColor: 'white',
    secondaryColor: '#11151c'
}

export const darkTheme: DefaultTheme = {
    primaryColor: 'black',
    secondaryColor: '#11151c'
}