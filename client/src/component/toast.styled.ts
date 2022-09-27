import styled from "styled-components";

export const PopUpContainer = styled.div`
position : absolute; 
top : 2rem;
right : 2rem;
transition : 300ms ease-in;

section {
    width : 80vw;
    height : 2rem;
    transition : 300ms ease-in;
    border-radius : .3rem;
    border : 1px solid #DAF7A6;
    display : flex;
    padding : .3rem;
    align-items : center;
    justify-content : space-around;
    background : rgba(127, 250, 105, .5);
    transform : translateY(2rem);


    nav {
        font-size : 1.6rem;
        color : rgb(127, 250, 105);
    }

    p {
        letter-spacing : .1rem;
        color : white;
    }
}
`