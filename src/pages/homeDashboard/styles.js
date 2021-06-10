import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
        color: var(--dark-grey);
        margin: 2rem;
    }

    img {
        width: 45rem;
        height: 30rem;
        margin-top: 10rem;
    }
`;