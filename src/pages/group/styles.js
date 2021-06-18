import styled from 'styled-components'

export const GroupContainer = styled.div`
    padding: 20px;
    
    .headerGroup{

        .titleContainer{
            h2{
                color: var(--dark-grey);
                margin-bottom:20px;
            }

            h3{
                color: var(--dark-grey);
                span{
                    color:var(--blue);
                }
            }


        }

        .buttonContainer{
            display: none;
            margin-top: 20px;

            @media (max-width: 500px){
                display: flex;
                justify-content: center;
            }
        }

    }

    .mainGroup{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: fit-content;
        margin-top:10px;

        .groupGoals{
            margin: 20px 0;
            width: 40%;
            
            
            .goalTitle{
                display: flex;
                justify-content: space-between;
                align-items: center;
                max-width: 400px;

                h3{
                    color:var(--red);
                }
            }

            .goalMain{
                margin-top: 20px;

              
            }

            @media (max-width: 500px) {
                width:100%;
            }
        }

        .groupActivities{
            margin: 20px 0;
            width: 55%;
            
            .activitiesTitle{
                display: flex;
                justify-content: space-between;
                align-items: center;    
                max-width: 480px; 

                h3{
                    color:var(--red);
                }       
            }

            .activitiesMain{
                margin-top: 20px;
            }

            @media (max-width: 500px) {
                width:100%;
            }
        }
    }


    @media (max-width: 500px){
        position: absolute;
        left:0;
        width: 100vw;         
    }
`

export const GoalsContainer = styled.div`
    background-color: var(--white);
    width: 100%;
    max-width: 400px;
    height: 200px;
    max-height: 200px;
    margin: 10px 0;
    display: flex;
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.3);


    .infoContainer{
        width:50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 30px;
        

        h3{
            padding-bottom: 7px;
            color: var(--dark-grey);
        }

        p{
            color: var(--dark-grey);
            width: 100px;
            margin: 5px 0;
            border-radius: 8px;
            padding: 2px 0 2px 5px;
            font-size: 1rem;

            span{
                color: var(--white);
            }
        }

        .difficulty{
            color: var(--dark-grey);

            .infoDif{
                color: var(--blue);
            }
        }

        .doneContainer{
                background-color: var(--blue);
                color: var(--white);
                .doneInfo{
                    font-weight: normal;
                }
            }
           
        .todoContainer{
            background-color: var(--red); 
            color: var(--white);
            .todoInfo{
                color: var(--white);
                font-weight: normal;
            }
        }
    }

    .chartContainer{
        width: 65%;
        height: 100%;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;

        .chartBox{
            width: 50%;
            height: 80%;
            display: flex;
            justify-content: center;
            align-items: center;

            @media(max-width: 500px){
                width: 60%;
            }

        }

        

    }
`

export const ActivitiesContainer = styled.div`
    background-color: var(--white);
    width: 100%;
    max-width: 480px;
    height: 120px;
    margin: 10px 0;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.3);

    .taskContainer{
        width: 80%;

        p{  
            font-size: 0.9rem;
            color: var(--dark-grey);
            padding: 12px 12px 12px 20px;
            display: flex;
            height: 100%;
            width: 95%;
        }

        @media(max-width: 500px){
            width: 70%;
        }
    }
   

    .buttonContainer{
        width: 25%;
        display: flex;
        justify-content: center;

        @media(max-width: 500px){
            width: 30%;
        }
    }

    
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

    
    .erro{
        color: var(--dark-red);
        font-size: 0.8rem;
        min-height: 20px;
        width: 90%;
        padding-left: 8px;
    }


`



