import { createGlobalStyle } from 'styled-components'; 

export default createGlobalStyle`
    :root {
        --gradient-blue: linear-gradient(#00b4db, #0083b0);
        --red: #f20505;
        --dark-red: #bf0404;
        --sand: #bfac95;
        --white: #ffffff;
        --maroon: #a85454;
        --grey: #6f6f6f;
        --dark-grey: #646464;
        --blue: #42b1dc;
    }

    #mainBody{
        /* max-width: 2000px; */
        margin: 0 auto;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    } 

    h1 {
        font-family: 'Shadows Into Light Two', cursive;
        color: var(--red);
    }
    

    body, input, button, h3, h4, h5, h6, p{
        font-family: 'Poppins', sans-serif;
    }

    body, input, button, p{
        font-size: 1rem;
    }

    h2 {
        font-family: 'Poppins', sans-serif;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

`;