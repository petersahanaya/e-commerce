import styled from "styled-components";

export const LoadingSuspense = styled.main`
    width : 100vw;
    height: 100vh;
    position: fixed;
    top : 0;
    right : 0;
    z-index : 999;
    background : #212121;
    display : flex;
    justify-content : center;
    align-items : center;

    h3 {
        font-family : "Titillium", "Poppins", sans-serif;
        color : white;
        font-weight : 900;
        font-size : 4.5rem;
        animation : opacitys 1000ms infinite alternate;

    }

    @keyframes opacitys {
        0%{
            opacity : 1;
        }

        30% {
            opacity : .7;
        }

        50% {
            opacity : 1;
        }

        70% {
            opacity : .7;
        }

        100% {
            opacity : 1;
        }
    }
`