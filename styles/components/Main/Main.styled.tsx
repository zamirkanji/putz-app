import styled from "styled-components";


export const Main = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${({theme}) => theme.primaryColor};
    color: ${({theme}) => theme.secondaryColor};
    // gap: 15px;
`