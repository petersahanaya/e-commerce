import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins&family=Roboto:wght@300;400&display=swap');

    html {
        scroll-behavior : smooth;
    }

    * {
        margin : 0;
        padding : 0;
        font-family : 'Poppins' , 'Roboto';
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