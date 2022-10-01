import styled from "styled-components";

export const MainContainer = styled.div`
    min-height: 100vh;
    padding: 4rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${({theme}) => theme.primaryColor};
    color: ${({theme}) => theme.secondaryColor};
`