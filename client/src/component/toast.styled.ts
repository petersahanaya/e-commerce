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
    display : flex;
    padding : .3rem;
    align-items : center;
    justify-content : space-around;
    background : white;
    box-shadow : 0 0 10px rgba(0,0,0,.1);
    transform : translateY(2rem);


    nav {
        font-size : 1.6rem;
        color : rgb(127, 250, 105);
    }

    p {
        letter-spacing : .1rem;
        color : #00ff80;
    }
}

@media screen and (min-width: 768px){
    section {
        transform : translateX(-13rem);
        width : 18rem;
        margin : auto;
    }
}
`