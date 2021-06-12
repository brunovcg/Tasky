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
        justify-content: space-evenly;
        width: 100%;
        margin-top:10px;

        .groupGoals{
            margin: 20px 0;
            width: 45%;
            
            
            .goalTitle{
                display: flex;
                justify-content: space-between;
                align-items: center;

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
            width: 45%;
            
            .activitiesTitle{
                display: flex;
                justify-content: space-between;
                align-items: center;     

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
    background-color: var(--dark-grey);
    width: 100%;
    height: 170px;
    margin: 10px 0;
    display: flex;
   

    .infoContainer{
        width:50%;
    }

    .chartContainer{
        width: 70%;
        height: 100%;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;

        .chartBox{
            width: 45%;
            height: 80%;
            display: flex;
            justify-content: center;
            align-items: center;

            @media(max-width: 500px){
                width: 60%;
            }

        }

        .label{
            color: var(--white);
            display: flex;
            justify-content: center;
            align-items: center;
            height:20%;
            width: 100%;

            .colorContainer{

                display: flex;
                width:50%;
                justify-content: center;
                align-items: center;
                

                .colorBox{
                    width: 10px;
                    height: 10px;
                    margin-right:4px;
                
                }

                .red{
                    background-color: var(--red)
                }

                .blue{
                    background-color: var(--blue)
                }
            }
        }

    }
`

export const ActivitiesContainer = styled.div`
    background-color: var(--dark-grey);
    width: 100%;
    height: 70px;
    margin: 10px 0;
`



