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
        font-size : 2.7rem;
        margin-bottom : .8rem;
    }

    form {
        display : flex;
        flex-direction : column;
        align-items : center;
        gap : .7rem;

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
`

