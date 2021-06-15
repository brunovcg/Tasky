import styled from 'styled-components';

export const Card = styled.div`
    width: 30%;
    height: 18%;
    padding: 1rem;
    margin: 1rem;
    background-color: var(--dark-grey);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    transition: 0.3s;
    border-radius: 8px;

    :hover {
        box-shadow: 1px 1px 5px var(--grey);
    }

    @media (max-width: 500px) {
        width: 100%;
    }
`;

export const CardText = styled.div`
    color: var(--white);
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-bottom: 1rem;
    font-variant: small-caps;

    .titleCard {
        font-variant: normal;
        font-weight: bold;

       
    }

    .infoCard{
        font-weight: bold;
        color: var(--blue)
    }

    .categoryInfo, .frequencyInfo{
        font-variant: small-caps;
        font-size: 20px;
        font-weight: bold;
        color: var(--white)

    }

 
`

export const CardButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 1rem;
    width: 100%;
    justify-content: space-around;
    
   

    @media (max-width: 500px) {
        margin-left: 0rem;
    }
`

export const HeaderOfHabits = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        color: var(--dark-red);
    }
`;

export const CardsPlace = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 2rem;
`;

export const ErrorPop = styled.div`
    color: var(--red);
    font-size: 0.8rem;
    min-height: 20px;
`


export const PopUpContainer = styled.div`
  position: absolute;
  top:-70px;
`

