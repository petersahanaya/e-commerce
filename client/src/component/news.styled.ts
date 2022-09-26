import styled from "styled-components";

export const NewsContainer = styled.div`
    display : grid;
    grid-template-columns : repeat(auto-fit, minmax(300px, 1fr));
    justify-items : center;
    gap : 1rem;
    scroll-snap-align : start;
    padding-bottom : 9rem;
    scroll-snap-type : y mandatory;

    h3 {
        text-align : center;
        font-size : 1.5rem;
        letter-spacing : .3rem;
        margin-bottom : 1rem;
    }

    a {
        text-decoration : none;
    }

    section {
        width : 19rem;
        box-shadow : 0 0 30px rgba(0,0,0,.08);
        border-radius : .7rem;
        overflow : hidden;
        padding-bottom : 1rem;
        scroll-snap-align : start;
        transition : 200ms;

        &:hover {
            transform : scale(1.02);
        }


        img {
            width : 100%;
        }

        nav {
            display : flex;
            justify-content : space-around;

            h4 {
                font-size : 1.3rem;
                font-variant : small-caps;
                color : black;
            }

            p {
                color : #373737;
            }
            padding : .8rem;
        }

        p:nth-child(3) {
            font-size : .9rem;
            text-align : center;
            margin-top : .8rem;
            color : #373737;
            letter-spacing : .1rem;
            white-space : nowrap;
            text-overflow : ellipsis;
            padding-left : 1rem;
            padding-right : 1rem;
            overflow : hidden;
        }
    }
`

export const NewsLoadingContainer = styled.div`
    display : grid;
    grid-template-columns : repeat(auto-fit, minmax(300px, 1fr));
    justify-items : center;
    gap : 1rem;
    scroll-snap-align : start;
    padding-bottom : 9rem;
    scroll-snap-type : y mandatory;

    section {
        width : 19rem;
        height : 18rem;
        box-shadow : 0 0 30px rgba(0,0,0,.08);
        border-radius : .7rem;
        overflow : hidden;
        padding-bottom : 1rem;
        display : flex;
        flex-direction : column;
        justify-content : space-around;
        align-items : center;
        scroll-snap-align : start;
        animation : loadingAnimate 1.5s infinite alternate;

        header {
            width : 19rem;
            height : 12rem;
            border-radius : .7rem;
            background : #777777;
        }
        nav {
            width : 18rem;
            height : 2rem;
            border-radius : .7rem;
            background : #777777;
        }

        nav {
            width : 18rem;
            height : 2rem;
            background : #777777;
            border-radius : .7rem;
        }


    }
`