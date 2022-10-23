import styled from "styled-components";

export const OptionContainer = styled.div`
    position : absolute;
    bottom : -7rem;
    right : 0;
    border-radius : 1rem;
    padding : .7rem;
    width : 9rem;
    box-shadow : 0 0 10px rgba(0,0,0,.1);
    background : white;
    display : flex;
    flex-direction : column;
    justify-content : space-around;
    transform : scale(.8);

    a {
        margin-top : .5rem;
        color : #333333;
        text-decoration : none;
        transition : 400ms ease-in;


        &:hover {
            color : #121212;
            transform : scale(1.02);
        }
    }
`