import styled from "styled-components";

export const CardContainer = styled.nav`
    width : 100vw;
    display : flex;
    overflow-x : scroll;
    align-items : center;

    a {
        text-decoration : none;
    }

    section {
        width : 10rem;
        height : 12rem;
        transform : scale(1) translateY(-2rem);
        box-shadow : 0 0 30px rgba(0,0,0,.05);
        margin-right : 1rem;
        padding : .7rem;
        transition : 200ms;
        overflow : hidden;

        img {
            width : 10rem;
            height : 75%;
            object-fit : cover;
        }

        div {
            display : flex;
            align-items : center;
            justify-content : space-around;

            h4 {
                letter-spacing : .1rem;
                color : black;
                font-size : .8rem;
            }
        }

        &:hover {
            transform : scale(.97) translateY(-2rem);
        }
    }
    &::-webkit-scrollbar{
        display : none;
        -ms-overflow-style : none;
        scrollbar-width : none;
    }
    
    p {
        font-size : .7rem;
        margin-top: .7rem;
        text-align : center;
        white-space : nowrap;
        overflow : hidden;
        text-overflow : ellipsis;
        color : #5E5E5E;
    }

    @media screen and (min-width: 768px){
        section {
            display : flex;
            justify-content : center;
            align-items : center;
            flex-direction : column;
            width : 14rem;
            height : 16rem;

            img {
                width : 100%;
                height : 75%;
            }

            div {
                h4 {
                    margin-top : .3rem;
                    font-size : 1rem;
                }
            }

            p:nth-child(3) {
                display : none;
            }
        }
    }
    
    @media screen and (min-width: 1024px){
        height : 26rem;
        section {
            width : 12rem;
            height : 14rem;
            transform : translateY(-4rem);
            overflow : visible;

            nav {
                h4 {

                }

                p:nth-child(1){
                    display : none;
                }
            }

            img {
                width : 100%;
                height : 75%;
            }

            &:hover {
            transform : scale(1.03) translateY(-4rem);
            }
        }
    }
`

export const CardLoadingContainer = styled.div`
    width : 100vw;
    overflow-x : scroll;
    display : flex;

    section {
        width : 10rem;
        height : 12rem;
        transform : scale(1) translateY(-2rem);
        box-shadow : 0 0 30px rgba(0,0,0,.05);
        margin-right : 1rem;
        padding : .7rem;
        transition : 200ms;
        display : flex;
        flex-direction : column;
        justify-content : space-around;
        animation : loadingAnimate 1.5s infinite alternate;

        header {
            width : 10rem;
            height : 7rem;
            background : #777777;
            border-radius : .4rem;
        }
        nav {
            width : 10rem;
            height : 1rem;
            background : #777777;
            border-radius : .4rem;
        }
    }

    &::-webkit-scrollbar{
        display : none;
        -ms-overflow-style : none;
        scrollbar-width : none;
    }
`

export const CardTopSale = styled.div`
        scroll-snap-align : start;
main {
    display : flex;
    align-items : center;
    justify-content : space-between;
    margin : 1rem;

    h5 {
        font-size : 1.5rem;
        letter-spacing : .2rem; 
    }
    
    p {
        color : #373737;
    }

    @media screen and (min-width: 768px){
        h5 {
            font-size : 2.2rem;
        }

        p {
            font-size : 1.3rem;
        }
    }
}


@media screen and (min-width: 1024px){
    main {
        padding : 1rem 2rem .5rem 2rem;
        margin : 0;

        h5 {
            font-size : 1.7rem;
        }
    }       
}
`