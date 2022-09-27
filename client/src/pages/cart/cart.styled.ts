import styled from "styled-components";

export const CartContainer = styled.div`
    padding-bottom : 3rem;
    header {
        display : flex;
        align-items : center;
        justify-content : space-around;
        width : 100vw;
        height : 4rem;
        box-shadow : 0 2px 1px rgba(0,0,0,.02);
        max-height : 4rem;

        a {
            font-size : 1.5rem;
        }

        h4 {
            font-size : 1.4rem;
            letter-spacing : .2rem;
        }
    }

    main {
        display : flex;
        flex-direction : column;
        justify-content : center;
        align-items : center;

        footer {
            display : flex;
            flex-direction : column;
            justify-content : center;
            align-items : center;
            gap : 3rem;

            nav {
                display : flex;
                justify-content : space-around;
                align-items : center;
                width : 100vw;

                h5 {
                    color : #656565;
                    letter-spacing : .1rem;
                    font-size : 1.1rem;
                }

                h3 {
                    color : #262626;
                }

            }

            button {
                font-size : 1.2rem;
                padding : .7rem;
                border : none;
                border-radius : .5rem;
                outline : none;
                width : 12rem;
                background-color : #52CBAB;
                color : white;  
                transition : 200ms ease-in;
                box-shadow : 0 3px 10px rgba(0,0,0,.1);

                &:hover {
                    background-color : #81CF06;
                }
            }
        }
        
        section {
            padding-left : 1rem;
            width : 100vw;
            height : 9rem;
            display : flex;
            box-shadow : 0 0 10px rgba(0,0,0,.04);
            align-items : center;
            gap : 1rem;
            
            img {
                width : 7rem;
                border-radius : .4rem;
            }
            
            main {
                width : 6rem;
                padding : .6rem;
                display : flex;
                flex-direction : column;
                justify-content : center;
                gap : .2rem;

                h4 {
                    letter-spacing : .2rem;
                    font-size : .8rem;
                }

                p {
                    font-size : .7rem;
                    color : #777777;
                    width : 100%;
                    overflow : hidden;
                    white-space : nowrap;
                    text-overflow : ellipsis;
                }

                h5 {
                    letter-spacing : .2rem;
                    color : #3A3A3A;
                }
            }

            div {
                display : flex;
                justify-content : space-around;
                align-items : center;
                gap : 1rem;

                button {
                    background : none;
                    border : none;
                    outline : none;
                    font-size : 1.3rem;
                    color : #52CBAB;
                }
            }
        }
    }
`

export const PopUpContainer = styled.div`
    position : absolute; 
    top : 2rem;
    right : 2rem;
    transition : 300ms ease-in;

    section {
        width : 80vw;
        height : 2rem;
        transition : 300ms ease-in;
        border-radius : .3rem;
        border : 1px solid #D98880;
        display : flex;
        padding : .3rem;
        align-items : center;
        justify-content : space-around;
        background : rgba(230, 176, 170, .1);
        transform : translateY(-3rem);


        nav {
            font-size : 1.6rem;
        }

        p {
            letter-spacing : .1rem;
        }
    }
`

export const NoCartItemContainer = styled.div`
    nav {
        display : flex;
        flex-direction : column;
        justify-content : center;
        align-items : center;
        margin-top : 2rem;

        img {
            width : 8rem;
        }

        h3 {
            padding : .5rem;
            color : #3D3D3D;
        }

        p {
            color : #515151;
        }
    }
`