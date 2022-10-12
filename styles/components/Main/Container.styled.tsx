import styled from "styled-components";

export const MainContainer = styled.main`
    flex: .8;
    // height: 100%;
    // width: 100%;
    display: flex;
    overflow: auto;
`


export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${({theme}) => theme.primaryColor};
    color: ${({theme}) => theme.secondaryColor};
`
