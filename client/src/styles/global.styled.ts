import { createGlobalStyle } from 'styled-components';

const buttonStyle = {
    color : '#75EB3A',
    shadow : ' box-shadow : 0 8px 12px rgba(0,0,0,0.06)'
}

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

    * {
        margin : 0;
        padding : 0;
        font-family : Poppins , arial, sans-serif;
    }
`