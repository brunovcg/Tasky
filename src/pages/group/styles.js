import styled from 'styled-components'

export const GroupContainer = styled.div`

    padding: 20px;

    .headerGroup{

        .titleContainer{
            h2{
                color: var(--dark-red);
                margin-bottom:20px;
            }

            h3{
                color: var(--blue);
                span{
                    color:var(--red);
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
        margin-top:10px;

        .groupGoals{
            margin: 20px 0;
            width: 45%;
            
            
            .goalTitle{
                display: flex;
                justify-content: center;
                align-items: center;
                
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
            width: 45%;
            
            .activitiesTitle{
                display: flex;
                justify-content: center;
                align-items: center;
                
            }

            .activitiesMain{
                margin-top: 20px;
            }

            @media (max-width: 500px) {
                width:100%;
            }
        
        }





        

        @media (max-width: 500px){
            .hidden{
                display: none;
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

    background-color: var(--dark-grey);
    width: 100%;
    height: 70px;
    margin: 10px 0;


`

export const ActivitiesContainer = styled.div`

    background-color: var(--dark-grey);
    width: 100%;
    height: 70px;
    margin: 10px 0;


`