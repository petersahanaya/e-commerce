import styled from "styled-components";

export const HeaderContainer = styled.div`
    width : 100vw;
    scroll-snap-align : start;
    display : flex;
    align-items : center;
    justify-content : space-around;
    height : 12vh;
    max-height : 4rem;
    box-shadow : 0 3px 3px rgba(0,0,0,0.04);
    background : rgba(255, 255, 255, 0);
    backdrop-filter : blur(30px);

    nav {
        width : 35px;
        height : 35px;
        display : flex;
        align-items : center;
        justify-content : center;
        transform : rotate(-30deg);
        font-size : 1.4rem;
        border-radius : 50%;
        cursor: pointer;
        box-shadow : 0 0 3px rgba(0,0,0,0.4);
    }
    
    section {
        position : relative;
        input {
            padding : .6rem;
            width : 12rem;
            color : black;
            border : none;
            outline : none;
            background : #dddddd;
            border-radius : .3rem;

            &::placeholder {
                letter-spacing : .1rem;
            }
        }

        div {
            position : absolute;
            top : 10px;
            right : 10px;
        }
    }
`

export const ArrowUp = styled.main`
        position : fixed;
        bottom : 7rem;
        right : 4rem;
        z-index : 20;
        font-size : 2.3rem;

        a {
            text-decoration : none;
            display : flex;
            justify-content : center;
            border-radius : 5rem;
            align-items : center;
            color : #BCE07C;
            box-shadow : 0 0 20px rgba(0,0,0,.2);
            animation : bounce 800ms ease-in infinite alternate;
        }

        @keyframes bounce {
            0% {
                transform : translateY(0);
            }
            50%{
                transform : translateY(.5rem);
            }
            70%{
                transform : translateY(-.2rem);
            }
            100%{
                transform : translateY(.5rem);
            }
        }
`

