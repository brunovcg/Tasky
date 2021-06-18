import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    min-height: 100vh;
    display: flex;
    background-color: var(--white);

    .DivContainer {
        width: 85%; 
    }

    .SideMenuContainer {
        width: 15%;

        @media (max-width: 500px) {
            width: 0;
        }
    }
`;

export const MainContainer = styled.article`
    
    height: 100vh;
    min-height: 80vh;
    width: 100%;
    background-color: var(--grey);


    @media (max-width: 500px) {
        position: absolute;
        left: 0;
        width: 100vw;
        height: 6000px;
    }
`;

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 20vh;
    color: var(--red);
       background-color: var(--grey);

    h2{
        font-size: 3rem;
        color: var(--blue) ;
    }

    h1 {
        position: absolute;
        top: 20px;
        right: 10px;
        transition: 0.4s;
        color: var(--red)
    }

    @media (max-width: 500px) {
        justify-content: flex-start;
        padding-left: 25vw;
        left: 0;
        width: 100vw;
        height: 10vh;

        h2{
            font-size: 2rem;
            padding-right: 25vw;
        }

        h1 {
            font-size: 25px;
            top: 20px;
            right: 20px;
        }
    }
`;