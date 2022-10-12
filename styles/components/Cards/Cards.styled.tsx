import styled from "styled-components"
import { cardTheme } from "../Theme/theme"

export const ListContainer = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    gap: 15px;
    // grid-template-columns: auto auto;
    // grid-template-rows: auto auto auto;
    
`

export const ListItem = styled.li`
    display: flex; 
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    // background: ${({theme}) => theme.secondaryColor};
    // color: ${({theme}) => cardTheme.primaryColor};
    border-radius: 10px;
    padding: 10px; 
    border: 1px solid #eaeaea;
    height: 125px;
    width: 100%;

    &:hover, focus, active {
        border-color: #34aeff;
        color: #34aeff;
    }
`

export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 800px;
    border: 1px solid blue;
`

export const Card = styled.div`
    margin: 1rem;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    max-width: 300px;

    &:hover, focus, active {
        border-color: #34aeff;
        color: #34aeff;
    }
`

export const DefaultStocksContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`