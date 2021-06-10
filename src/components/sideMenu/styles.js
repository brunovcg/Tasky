import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background: var(--gradient-blue);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

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

    @media (max-width: 700px) {
        width: 2rem;
        height: 2rem;
    }
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
    font-size: 1rem;
    margin: 1rem;

    :hover {
        font-weight: bold;
        border-bottom: 2px solid var(--white);
    }

    @media (max-width: 700px) {
        font-size: 0.8rem;
    }
`;

export const ButtonContainer = styled.div`
    margin: 1rem;

    @media (max-width: 500px) {
        visibility: hidden;
    }
`;

export const GroupMembers = styled.div`
    height: fit-content;
    width: 90%;
`;