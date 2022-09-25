import styled from "styled-components";

export const FooterContainer = styled.div`
    width : 100vw;
    height : 12vh;
    max-height : 10vh;
    position : fixed;
    box-shadow : 0 -4px 25px rgba(0,0,0,0.03);
    bottom : 0;
    background : white;
    right : 0;
    z-index : 5;

    display : flex;
    align-items : center;
    justify-content : space-around;

    section {
        font-size : 1.8rem;
    }

    nav {
        background : #FFC300;
        color : white;
        display : flex;
        justify-content : center;
        align-items : center;
        border-radius : 50%;
        font-size : 1.9rem;
        padding : .8rem;
        margin-bottom: 3rem;
        box-shadow : 0 0 25px rgba(0,0,0,0.1);
    }
`