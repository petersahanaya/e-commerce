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
    position : fixed;
    top : 0;
    right : 0;
    z-index : 30;
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
     font-size : 1.4rem; 
     a{
        text-decoration : none;
        color : black;
     }
    }

    footer {
        display : none;
    }

    @media screen and (min-width : 768px){
        padding : 1rem 0;
        nav {
            width : 45px;
            height : 45px;
            font-size : 2rem;
        }

        section {
            font-size : 2rem;
        }

        footer {
            width : 22rem;
            cursor: pointer;
            font-size : 1.2rem;
            color : #212121;
            display : flex;
            justify-content : space-around;
            align-items : center;
            transition : 200ms;
            
            a {
                width : 9rem;
                font-size : 1.4rem;
                text-align : center;
                text-decoration : none;
                color : #212121; 
                display : inline-block;
                transition : 300ms;
                &:hover {
                    transform : scale(1.1);
                    font-weight : 200;    
                }
            }
        }
    }

    @media screen and (min-width: 1024px){
        footer {
            width : 22rem;
            cursor: pointer;
            font-size : 1.2rem;
            color : #212121;
            display : flex;
            justify-content : space-around;
            align-items : center;
            transition : 200ms;
            
            a {
                width : 9rem;
                text-align : center;
                text-decoration : none;
                color : #212121; 
                display : inline-block;
                transition : 300ms;
                &:hover {
                    transform : scale(1.1);
                    font-weight : 200;    
                }
            }
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

        @media screen and (min-width: 768px){
            font-size : 2.8rem;
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

