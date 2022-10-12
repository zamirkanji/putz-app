import styled from "styled-components";

export const FormContainer = styled.div`
    box-sizing: border-box;
    background-color: #324a5f;
    background: ${({theme}) => theme.primaryColor};
    color: ${({theme}) => theme.secondaryColor};
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px;
    gap: 25px;
    // &:hover {
    //     border: 1px solid white;
    // }
`

export const Title = styled.h3`
    color: #2473a8;
    font-size: 25px;
    font-weight: 400;
    flex: .1;
    text-align: center;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    gap: 25px;
    flex: .80;
    input[type=email], input[type=password] {
        border: 2px solid #2473a8;
        border-radius: 7px;
        padding-left: 7px;
        padding: 7px;
        margin: 7px;
        width: 50%;
        color: #153243;
        &:active {
            border: 3px;
            border-color: black;
        }
        ::placeholder {
            color: #153243
        }
        :focus {
            border: 2px solid #2473a8;
            outline: none;
        }
        :valid {
            border-color: green;
        }
    }
`