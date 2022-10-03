import styled from 'styled-components';

export const NavbarContainer = styled.nav`
    flex: .10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #b4b8ab;
    background-color: #324a5f;
    background: ${({theme}) => theme.primaryColor};
    color: ${({theme}) => theme.secondaryColor};
    // border: 1px solid #eaeaea;
    padding: 15px;
    margin: 0;

`