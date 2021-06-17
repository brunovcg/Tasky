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
    width: 30%;
    height: 10%;
    padding: 1rem;
    margin: 0.5rem;
    background-color: var(--maroon);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    border-radius: 8px;
    transition: 0.3s;

    :hover {
        box-shadow: 2px 2px 5px var(--dark-grey);
        opacity: 0.9;
    }

    .info {
        color: var(--white);
        padding: 2px;

        span{
            color: var(--blue);
        }
    }

    img {
        display: flex;
        flex-direction: column;
        width: 50px;
        height: 50px;
    }

    @media (max-width: 686px) {
        justify-content: space-between;
        width: 90%;
    }
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;

    @media (max-width: 686px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const PopUpContainer = styled.div`
  position: absolute;
  top:-70px;
`

export const ErrorPop = styled.div`
    color: var(--red);
    font-size: 0.8rem;
    min-height: 20px;
`