import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        color: var(--dark-red);
    }
`;

export const Card = styled.div`
    width: 45%;
    height: 10%;
    padding: 1rem;
    margin: 1rem;
    background-color: var(--maroon);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    transition: 0.3s;

    :hover {
        box-shadow: 1px 1px 5px var(--grey);
    }

    .info {
        color: var(--white);
    }

    img {
        width: 50px;
        height: 50px;
    }

    @media (max-width: 500px) {
        .img {
            margin: auto;
        }
    }
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
`;