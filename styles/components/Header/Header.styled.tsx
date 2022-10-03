import styled from "styled-components";

export const HeaderContainer = styled.header`
    flex: .10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #324a5f;
    background: ${({theme}) => theme.primaryColor};
    color: ${({theme}) => theme.secondaryColor};
    // border: 1px solid #eaeaea;
    padding: 15px;
    margin: 0;
    h1 {
        color: #2473a8;;
    }
`