import styled from "styled-components";

export const SearchContainer = styled.div`
    padding-bottom : 8rem;
    header {
        width : 100vw;
        display : flex;
        justify-content : space-around;
        align-items : center;
        padding : .8rem;
        height : 4rem;
        box-shadow : 0 4px 30px rgba(0,0,0,.05);

        main {
        position : relative;

            input {
                width : 16rem;
                padding : .8rem;
                border : none;
                outline : none;
                border-radius : .5rem;
                background : #D5D5D5;
                color : black;
            }
            
            button {
                border : none;
                background : none;
                outline : none;
                color : black;
                position : absolute;
                top : 8px;
                right : 8px;
                font-size : 1.4rem;
            }
        }
    }

    footer {
        display : flex;
        flex-direction : column;
        justify-content : center;
        align-items : center;
        margin-top : 3rem;

        img {
            width : 13rem;
        }

        h4 {
            margin-bottom : .3rem;
            color : #2C2C2C;
            letter-spacing : .1rem;
        }

        p {
            color : #4A4A4A;
            letter-spacing : .06rem;
        }
    }

    main {
        h3{
            text-align : center;
            font-size : 1.2rem;
            letter-spacing : .2rem;
            margin : 1rem;
        }
    }

    @media screen and (min-width: 768px){
        width : 100vw;
        overflow-x : hidden;
        header {
            main {
                input {
                    width : 30rem;
                }
            }
        }

        main {
            h3 {
                font-size : 2rem;
            }
        }
    }

    @media screen and (min-width: 1024px){
        header {
            main {
                input {
                    width : 40rem;
                }
            }
        }

        main {
                display : grid;
                grid-template-columns : repeat(auto-fit, minmax(300px, 1fr));
        }
    }
`

export const SearchHeading = styled.article`
    h3 {
        text-align : center;
        font-size : 2rem;
        margin : 1rem;
    }
`