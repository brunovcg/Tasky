import { createGlobalStyle } from 'styled-components'; 

export default createGlobalStyle`
    :root {
        --gradient-blue: linear-gradient(#06cbf7, #22b9df);
        --gradient-optional: linear-gradient(to right, #88aef5, #8eb6ee);
        --red: #ff8484;
        --dark-red: #f20505;
        --green: #7FC15E;
        --dark-green: #358f08 ;
        --yellow:#e9e394;
        --white: #ffffff;
        --maroon: #a85454;
        --grey: #e6e5e5;
        --dark-grey: #3c3737;
        --blue: #70B5F9;
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