import styled from "styled-components";

export const Container = styled.main`
    background: ${({theme}) => theme.primaryColor};
    color: ${({theme}) => theme.secondaryColor};
    flex: .8;
    // display: flex;
    // flex-direction: column;
    // gap: 25px;
    overflow: auto;
`

export const MainContainer = styled.div`
    flex: .8;
    // height: 100%;
    // width: 100%;
    display: flex;
`