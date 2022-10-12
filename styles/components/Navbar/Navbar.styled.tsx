import styled from 'styled-components';

export const NavbarContainer = styled.nav`
    flex: .8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${({theme}) => theme.primaryColor};
    color: ${({theme}) => theme.secondaryColor};
    margin: 0;
    min-height: 20px;
    border: 1px solid blue;
`