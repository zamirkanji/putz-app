import styled from "styled-components";

export const HeaderContainer = styled.div`
    flex: .10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #324a5f;
    background: ${({theme}) => theme.primaryColor};
    color: ${({theme}) => theme.secondaryColor};
    padding: 15px;
    margin: 0;
    h1 {
        color: #2473a8;;
    }
`