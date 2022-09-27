import styled from "styled-components";

export const ContainerDetail = styled.div`
    padding-bottom: 1rem;

    header {
        display : flex;
        align-items : center;
        justify-content : space-around;
        padding : .7rem;

        main {
            position : relative;
            
            a {
                font-size : 1.6rem;
                text-decoration : none;
                color : black;
            }

            div {
                display : absolute;
                top : 0;
                right : 0;
                background : red;
                transform : translate(1.5rem, -2rem);
                width : 7px;
                height : 7px;
                border-radius : 50%;
            }
            
        }        
        h4 {
            font-size : 1.3rem;
        }
    }

    section {
        div {
        display : flex;
        justify-content : space-around;
        text-decoration : none;

        main {
            display : flex;
            align-items : center;
            gap : 1rem;

            button {
                display : flex;
                align-items : center;
                gap : 1rem;
                background : none;
                border : none;
                font-size : 1.5rem;
                outline : none;
                color : #52CBAB;
            }

            p {
                color : black;
                font-size : 1.1rem;
            }
        }

            a {
                background : #00E8AB;
                color : white;
                text-align : center;
                text-decoration : none;
                padding : 1rem;
                border : none;
                outline : none;
                font-size : 1.2rem;
                border-radius : .5rem;
                box-shadow : 0 3px 15px rgba(0,0,0,.1);
                width : 10rem;
                letter-spacing : .2rem;
                transition : 200ms;

                &:hover {
                    background : #00C490;
                }   
            }
        }
        
        nav {
            width : 100vw;
            height : 17rem;
            img {
                width : 100%;
                height : 100%;
                object-fit :  cover;
            }
        }
        
        h6 {
            font-size : .7rem;
            margin-left : 1rem;
            margin-top: 1rem;
            background : black;
            color : white;
            display : inline-block;
            padding : .5rem;
            border-radius : .5rem;
        }
        
        article {
            padding : .6rem;
            margin-bottom : 2rem;

            h3 {
                font-size : 1.4rem;
                letter-spacing : .1rem;
            }
            
            p {
                color : #373737;
                font-size : .9rem;
                margin-top : .5rem;
                letter-spacing : .04rem;
            }
            
            h4 {
                margin-top : .8rem;
                letter-spacing : .2rem;
                color : #333333;
                font-size : 1.5rem;
            }
        }
    }
`

export const DetailProductLoading = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : space-around;
    align-items : center;
    animation : loadingAnimate 1.5s infinite alternate;

    section {
        width : 100vw;
        height : 17rem;
        background : #777777;
    }

    nav {
        width : 90vw;
        margin-top : 2rem;
        border-radius : .8rem;
        height : 3rem;
        background : #777777;
    }

    div {
        width : 100vw;
        display : flex;
        justify-content : space-around;
        align-items : center;

        main {
            width : 8rem;
            border-radius : .6rem;
            height : 2rem;
            background : #777777;
            margin-top : 2rem;
        }
    }
`

