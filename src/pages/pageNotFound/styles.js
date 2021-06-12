import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 20vh auto;
    width: 100%;
    background-color: var(--white);

    img {
        width: 50vw;
        height: 60vh;
    }

    h3 {
        font-size: 1.5rem;
        color: var(--dark-grey);
        margin: 0.5rem;
    }

    h2 {
        font-size: 3rem;
        padding: 2rem;
        color: var(--dark-grey);
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;