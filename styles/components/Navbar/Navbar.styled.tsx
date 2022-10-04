import styled from 'styled-components';

export const NavbarContainer = styled.nav`
    // flex: .80;
    // min-height: 50px;
    display: flex;
    justify-content: space-between;
    // align-items: center;
    background: ${({theme}) => theme.primaryColor};
    color: ${({theme}) => theme.secondaryColor};
    // border: 1px solid #eaeaea;
    // padding: 15px;
    margin: 0;
    min-height: 20px;
    // border: 1px solid blue;
`