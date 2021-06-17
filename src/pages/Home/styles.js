import styled, {css} from 'styled-components'
import back from '../../assets/background.jpg'


export const Container = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-image: url(${back});
    background-size: cover;
    background-repeat: no-repeat;

    .transparentBox{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background-color: var(--transparent-black);

        .headerBox{

            height: 30%;

            display: flex;
            align-items: center;


            img{
                width: 11rem;
                height: 11rem;
                
            }

            h1{
                display: flex;
                font-size: 7rem;
                align-items: center;
                margin-top: 20px;
            }
        }

        .descriptionBox{
            height: 40%;
            display: flex;
            align-items: center;
            justify-content: center;
           

            p{
                font-family: 'Viaoda Libre', cursive;
                color: var(--white);
                font-size: 3.5rem;
                text-align: center;
                width: 70%;

            }

        }

        .buttonBox{
            height: 30%;
            display: flex;
            align-items: center;
        }



    }

    @media (max-width: 500px){

        .transparentBox{

            .headerBox{

                img{
                    width: 8rem;
                    height: 8rem;
                }

                h1{
                    font-size: 5rem;
                }
            }

        }
    }
    
    
   
`
