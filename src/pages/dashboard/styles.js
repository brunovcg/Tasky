import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    min-height: 100vh;
    display: flex;

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
`;

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 10vh;
    color: var(--red);
    position: relative;

    h1 {
        position: absolute;
        top: 20px;
        right: 10px;
        transition: 0.4s;
    }

    @media (max-width: 500px) {
        h1 {
            font-size: 20px;
            top: 32px;
        }
    }
`;