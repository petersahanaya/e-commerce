import { createGlobalStyle } from 'styled-components';

const buttonStyle = {
    color : '#75EB3A',
    shadow : ' box-shadow : 0 8px 12px rgba(0,0,0,0.06)'
}

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins&family=Roboto:wght@300;400&display=swap');

    html {
        scroll-behavior : smooth;
    }

    * {
        margin : 0;
        padding : 0;
        font-family : 'Poppins' , 'Roboto', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    @keyframes loadingAnimate {
        0%{
            opacity : 1;
        }
        50%{
            opacity : .8;
        }
        100%{
            opacity : 1;
        }
    }
`