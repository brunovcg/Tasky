import styled from 'styled-components';

export const Container = styled.div`
    width: 10vw;
    height: 100vh;
    background: var(--gradient-blue);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    span {
        color: var(--white);
        visibility: hidden;
    }

    @media (max-width: 500px) {
        width: 7vw;
        height: 1.5vh;

        span {
            visibility: visible;
        }
    }
`;

export const UserContainer = styled.div`
    text-align: center;

    p {
        text-align: center;
        color: var(--white);
    }

    @media (max-width: 500px) {
        visibility: hidden;
    }

`;

export const Img = styled.img`
    width: 4rem;
    height: 4rem;
    padding: 0.3rem;
    border-radius: 50%;
    background-color: #dcdcdc;
    margin-top: 2rem;
    align-items: center;
`;

export const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
`;

export const Link = styled.a`
    width: 7vw;
    height: 3vh;
    border-bottom: 1px solid var(--white);
    color: var(--white);
    font-size: 1.2rem;
    margin: 1rem;

    :hover {
        font-weight: bold;
        border-bottom: 2px solid var(--white);
    }
`;

export const ButtonContainer = styled.div`
    margin-bottom: 1rem;
`;