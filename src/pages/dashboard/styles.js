import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: fit-content;
    min-height: 100vh;
    display: flex;
    background-color: var(--white);

    .DivContainer {
        width: 85%; 
    }

    .SideMenuContainer {
        width: 15%;
    }
`;

export const MainContainer = styled.div`
    height: 90%;
    width: 100%;
    background-color: var(--white);

    @media (max-width: 500px) {
        position: absolute;
        left: 0;
        width: 100vw;
    }
`;

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 10vh;
    color: var(--red);
    position: relative;
    background-color: var(--white);
    h1 {
        position: absolute;
        top: 20px;
        right: 10px;
        transition: 0.4s;
    }

    @media (max-width: 500px) {
        justify-content: flex-start;
        padding-left: 40%;
        position: relative;
        left: 0;
        width: 100vw;
        height: 10vh;

        h1 {
            font-size: 20px;
            top: 32px;
        }
    }
`;