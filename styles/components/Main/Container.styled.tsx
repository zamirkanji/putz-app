import styled from "styled-components";

export const Container = styled.div`
    background: ${({theme}) => theme.primaryColor};
    color: ${({theme}) => theme.secondaryColor};
    flex: .8;
    // display: flex;
    // flex-direction: column;
    // gap: 25px;
`