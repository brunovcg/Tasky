import styled from 'styled-components';

export const Container = styled.div`
    width: 10vw;
    height: 100vh;
    background: var(--gradient-blue);
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        margin-bottom: 1.5rem;
        color: var(--white);
    }

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
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: #dcdcdc;
    margin-top: 2rem;
    margin-bottom: 1rem;

    img {
        width: 4rem;
        height: 4rem;
        padding: 0.3rem;
    }

    @media (max-width: 500px) {
        visibility: hidden;
    }

`;

export const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Link = styled.a`
    width: 9vw;
    height: 3vh;
    border-bottom: 1px solid var(--white);
    color: var(--white);
    font-size: 1.2rem;
    text-align: center;
    margin: 1rem;

    :hover {
        font-weight: bold;
        border-bottom: 2px solid var(--white);
    }
`;