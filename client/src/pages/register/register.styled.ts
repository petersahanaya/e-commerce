import styled from "styled-components";

export const RegisterContainer = styled.div`
    background : #F6F6F6;
    width : 100vw;
    height : 100vh;
    padding-top : 4rem;

    p {
        text-align : center;
        color : red;
        margin-top : 1rem;
        font-size : .8rem;
    }

    h3 {
        text-align : center;
        font-size : 3rem;
        font-family : 'Titillium', 'Poppins';
        margin-bottom : .8rem;
        letter-spacing : .1rem;
        color : #3d3d3d;
    }

    form {
        display : flex;
        flex-direction : column;
        align-items : center;
        gap : .7rem;

        a {
            text-decoration : none;
            cursor: pointer;
            color : #3d3d3d;
            font-size : .8rem;
            border-bottom : 1px solid #63ffaf;
            margin-top : 2rem;
        }

        input {
            padding : .8rem;
            border : none;
            outline : none;
            width : 15rem;
            box-shadow : 0 8px 14px rgba(0,0,0,0.02);
            border-radius : .4rem;
        }

        button {
            padding : .7rem;
            border : none;
            outline : none;
            width : 9rem;
            box-shadow : 0 8px 12px rgba(0,0,0,0.06);
            background : #75EB3A;
            color : #3d3d3d;
            border-radius : .4rem;
            cursor: pointer;
            transition : 200ms;

            &:hover {
                background : #5FBE2F;
                color : white;
            }
        }
    }

    @media screen and (min-width: 768px){
        h3 {
            font-size : 4.5rem;
        }

        form {
            input {
                width : 25rem;

                &::placeholder {
                    font-size : 1.1rem;
                    padding : 1.2rem;
                }
            }

            button {
                width : 15rem;
                font-size : 1.2rem;
            }

            a {
                font-size : 1.3rem;
            }
        }
    }
`

