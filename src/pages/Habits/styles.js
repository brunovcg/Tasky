import styled from 'styled-components';

export const Card = styled.div`
    width: 330px;
    height: 250px;
    padding: 20px;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    transition: 0.3s;
    border-radius: 8px;
    box-sizing: border-box;
    margin: 10px;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.3);

    @media (max-width: 500px) {
        width: 85%;
        flex-direction: row;
        height: fit-content;
    }
`;

export const CardText = styled.div`
    color: var(--dark-grey);
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-bottom: 1rem;

    .titleCard {
        font-variant: normal;
        font-weight: bold;

       
    }

    .infoCard{
     
        color: var(--blue)
    }

    .categoryInfo, .frequencyInfo{
        font-size: 1rem;
    
        color: var(--dark-grey)

    }

    @media (max-width: 500px) {
        width: 70%;
       
    }

 
`

export const CardButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-around;
    
   

    @media (max-width: 500px) {
        margin-left: 0rem;
        width: 30%;
        flex-direction: column;
        
    }
`
export const Main = styled.main`
    width: 100%;
    min-height: 100%;
    

    

    .headerBox{
        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
            color: var(--dark-grey);
        }
}
;

`



export const CardsPlace = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    background-color: var(--grey);

    @media (max-width: 500px) {
       justify-content: center;
        
    }
    
`;

export const ErrorPop = styled.div`
    color: var(--dark-red);
    font-size: 0.8rem;
    min-height: 20px;
    width: 90%;
    padding-left: 8px;

`


export const PopUpContainer = styled.div`
  position: absolute;
  width:99vw;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 3;

  @media (max-width: 500px){
      width: 100vw;
      
    }

`

