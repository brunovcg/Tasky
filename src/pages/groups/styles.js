import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        color: var(--dark-grey);
    }
`;

export const Card = styled.div`
    width: 45%;
    max-width: 450px;
    min-height: 180px;
    padding: 1rem;
    margin: 0.5rem;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    border-radius: 8px;
    transition: 0.3s;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.3);
    
    

    :hover {
        box-shadow: 2px 2px 5px var(--dark-grey);
        opacity: 0.9;
    }

    h4{
        color: var(--dark-grey)
    }

    .buttonBox{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 30%;
    }

    .info {
        color: var(--red);
        padding: 2px;
        height: 70%;

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



export const Main = styled.main`

    position: relative;


`

export const PopUpContainer = styled.div`
    position: absolute;
    width:99vw;
    top: -20vh;
    left: -15vw;
    height: 100vh;
    z-index: 3;

    @media (max-width: 500px){
      width: 100vw;
      left: 0;
      top: 2vh;
      height: 100vh;
    }
      
`

export const ErrorPop = styled.div`
    color: var(--red);
    font-size: 0.8rem;
    min-height: 20px;
    width: 90%;
    padding-left: 8px;

`