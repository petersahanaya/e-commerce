import styled from "styled-components"
export const PreviewContainer = styled.section`
        scroll-snap-align : start;
        width : 100vw;
        overflow : hidden;
        position : relative;
        height : 14rem;
        max-height : 14rem;
        background : linear-gradient(to bottom, #d1d1d1, white);
        z-index : 5;

        img {
            margin-left : 8rem;
            width : 15rem;
            object-fit : cover;
        }

        &::before{
            content : '';
            width : 100%;
            z-index : 5;
            height : 100%;
            position: absolute;
            background : linear-gradient(to  bottom, rgba(0,0,0,0), rgba(0,0,0,.5));
            top : 0;
            right : 0;
        }

        div {
            position : absolute;
            bottom : 25px;
            left : 25px;
            z-index : 5;

            h4 {
                color : white;      
                margin-bottom : .3rem;
                letter-spacing : .3rem;
                font-size : 2rem;
            }

            h3 {
                font-size : 3rem;
            }

            p{
                color : white;
                background : #212121;
                    border-radius : 2rem;
                    display : inline;
                    padding : .7rem;
                    font-size : .9rem;
                    margin-top : 1rem;
                    cursor: pointer; 
            }
        }

        @keyframes positions {
            0% {
                transform : translate(3rem);
            }
            100% {
                transform : translate(0);
            }   
        }

        @media screen and (min-width : 768px){
            height : 24rem;
            max-height : 24rem;
            display : flex;
            justify-content : center;
            align-items : center;


            img {
                margin-top : 4rem;
                width : 30rem;
                margin-left : 30rem;
                object-fit : cover;
            }

            div {
                bottom : 4rem;
                left : 5rem;

                h3 {
                    font-size : 4rem;
                }

                h4 {
                    font-size : 5rem;
                }

                p {
                    background : #212121;
                    border-radius : 2rem;
                    display : inline;
                    padding : .7rem;
                    cursor: pointer;
                    font-size : 1.2rem;
                }
            }
        }

        @media screen and (min-width : 1024px){
            height : 24rem;
            max-height : 24rem;
            display : flex;
            justify-content : center;
            align-items : center;


            img {
                margin-top : 4rem;
                width : 30rem;
                margin-left : 30rem;
                object-fit : cover;
            }

            div {
                bottom : 4rem;
                left : 8rem;

                h3 {
                    font-size : 4rem;
                }

                h4 {
                    font-size : 5rem;
                }

                p {
                    background : #212121;
                    border-radius : 2rem;
                    display : inline;
                    padding : .7rem;
                    cursor: pointer;
                }
            }
        }
`

export const LoadingPreview = styled.div`
    width : 100vw;
    height : 14rem;
    max-height : 14rem;
    background : #777777;
    animation : loadingAnimate 1.5s infinite alternate;
`