import styled from "styled-components";

export const SuccessContainer = styled.main`
    width : 100vw;
    height : 100vh;
    display : flex;
    justify-content : center;
    align-items : center; 

    section {
        display : flex;
    justify-content : center;
    flex-direction : column;
    align-items : center;  
    gap : 2rem;

    img {
        width : 180px;
        animation : car 1500ms ease-in infinite alternate;
    }

    h4 {
        font-size : 1.2rem;
        color : #242424;
        letter-spacing : .1rem;
        text-align : center;
    }

    a {
        text-decoration : none;
        text-align : center;
        border : none;
        border-radius : 2rem;
        cursor: pointer;
        width : 10rem;
        background : #1c1c1c;
        color : white;
        padding : .7rem;
        transition : 300ms;

        &:hover {
            transform : scale(1.07);
        }
    }

    }

    @media screen and (min-width: 768px){
       section {
        img {
            width : 220px;
        }

        h4 {
            font-size : 1.4rem;
        }

        a {
            width : 12rem;
            font-size : 1.1rem;
        }
       }
    }

    @keyframes car {
        0%{
            transform : translateX(0);
        }

        30% {
            transform : translateX(4rem);
        }

        50%{

            transform : translateX(0);
        }

        70% {
            transform : translateX(4rem); 
        }

        100% {
            transform : translateX(0); 
        }
    }
`