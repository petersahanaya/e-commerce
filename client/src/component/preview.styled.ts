import styled from "styled-components"
export const PreviewContainer = styled.section`
        scroll-snap-align : start;
        width : 100vw;
        overflow : hidden;
        position : relative;
        height : 14rem;
        max-height : 14rem;
        background : pink;

        img {
            width : 100%;
            height : 100%;
            object-fit : cover;
        }

        &::before{
            content : '';
            width : 100%;
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

            h4 {
                color : white;      
                margin-bottom : .3rem;
                letter-spacing : .3rem;
            }

            p {
                color : white;
                font-size : .6rem;
                width : 50%;
                font-style: oblique;
                margin-bottom: .2rem;
                letter-spacing : .1rem;
            }

            p {
                color : white;
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
`

export const LoadingPreview = styled.div`
    width : 100vw;
    height : 14rem;
    max-height : 14rem;
    background : #777777;
    animation : loadingAnimate 1.5s infinite alternate;
`