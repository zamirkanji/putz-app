import styled from "styled-components"

export const MarketContainer = styled.div`
    box-sizing: border-box;
    background: ${({theme}) => theme.primaryColor};
    color: ${({theme}) => theme.secondaryColor};
    width: 100%;
    height: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // border: 1px solid #2473a8;
    gap: 10px;
`