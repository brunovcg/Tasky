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
        max-width: 100%;
        height: 100%;
        margin-top: 100px;
    }
`;