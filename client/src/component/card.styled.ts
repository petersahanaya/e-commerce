import styled from "styled-components";

export const CardContainer = styled.nav`
    width : 100vw;
    display : flex;
    overflow-x : scroll;
    align-items : center;

    section {
        width : 10rem;
        height : 12rem;
        transform : scale(1) translateY(-2rem);
        box-shadow : 0 0 30px rgba(0,0,0,.05);
        margin-right : 1rem;
        padding : .7rem;
        transition : 200ms;

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
                font-variant : small-caps;
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
        font-variant : small-caps;
    }
    
    p {
        color : #373737;
    }
}
`