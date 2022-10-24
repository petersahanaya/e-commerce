import styled from "styled-components";

export const ProfileContainer = styled.div`
    header {
        width : 100vw;
        height : 4rem;
        max-height : 4rem;
        position : relative;
        display : flex;
        justify-content : space-around;
        align-items : center;
        box-shadow : 0 5px 10px rgba(0,0,0,.03);
        margin-bottom : 1rem;

        a {
            font-size : 1.5rem;
        }

        h4 {
            font-size : 1.2rem;
            letter-spacing : .1rem;
        }

        button {
            cursor: pointer;
            background : none;
            outline : none;
            border : none;
            font-size : 1.2rem;
        }
    }

    main {
        display : flex;
        justify-content : space-around;
        align-items : center;

        img {
            width : 10rem;
            height : 10rem;
            border-radius : 50%;
            box-shadow : 0 0 10px rgba(0,0,0,.1);
            object-fit : cover;
        }

        div {
            h4 {
                letter-spacing : .1rem;
            }

            p {
                color : #4D4D4D;
                letter-spacing : .1rem;
                font-size : .8rem;
                text-align : center;
            }
        }
    }

    footer {
        margin-left : 1rem;
        display : flex;
        flex-direction : column;
        gap : .8rem;
        margin-top : 1rem;

        main {
            p {
                color : #4D4D4D;
            }
        }

        nav {
            display : flex;
            justify-content : space-around;
            align-items : center;

            section{   
                p:nth-child(1) {
                    color : white;
                    background : #282828;
                    padding : .6rem;
                    width : 5rem;
                    letter-spacing : .1rem;
                    text-align : center;
                    border-radius : 2rem;
                    margin-top : -1rem;
                }
            }
        }
    }

    nav {
        padding : 1rem;
        p{
            color : #4D4D4D;
        }
        
        section {
            display : flex;
            align-items : center;
            justify-content : space-evenly;

            img {
                width : 5rem;
            }

            p:nth-child(2) {
                letter-spacing : .2rem;
                color : #303030;
                font-size : 1.2rem;
            }
        }
    }

    @media screen and (min-width : 768px){
        header {
            padding : 1rem 0;

            a {
                font-size : 2.2rem;
                color : #303030;
            }

            h4 {
                font-size : 1.8rem;
                color : #303030;
            }

            button {
                font-size : 1.8rem;
            }
        }

        main {
            img {
                width : 12rem;
                height : 12rem;
            }

            div {
                h4 {
                    font-size : 1.6rem;
                }

                p {
                    font-size : 1.2rem;
                }
            }
        }

        footer {
            main {
                p {
                    font-size : 1.4rem;
                }
            }

            nav {
                section { 
                    p:nth-child(1){
                        font-size : 1.3rem;
                        width : 8rem;
                    }
                }
            }
        }

        nav {
            padding : 2rem;

            p {
                font-size : 1.6rem;
            }

            section {
                img {
                    width : 7rem;
                } 

                p:nth-child(2){
                    font-size : 1.4rem;
                }
            }
        }
    }
`