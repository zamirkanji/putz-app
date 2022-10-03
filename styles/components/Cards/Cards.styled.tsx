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

export const DefaultStocksContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`