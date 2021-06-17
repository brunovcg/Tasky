import styled, {css} from 'styled-components'

export const Container = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: var(--gradient-blue);
    
    .taskMobile{
        display: none;
    }

    .titleMobile{
        display: none;
    }

    .whiteContainer{
        width:40%;

    }

    p{
        font-size: 1.1rem;
        color: var(--dark-grey);
        font-weight:bold;
        margin-top: 1rem;
        width: 100%;
        text-align: center;
        padding: 0 15%;
        font-family: 'Shadows Into Light Two', cursive;
    }

    h1{
        font-size: 3.5rem;
    }

    .whiteBox{
        background-color: var(--white);
        height: 18rem;
        width: 18rem;
        margin-top: 2rem;
        border-radius: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow: 2px 2px 2px rgba(0,0,0,0.3);

      
    }

    .buttonPlace{
        margin-top: 2rem;
        margin-bottom: -1rem;

        button{
            margin: 1rem;
        }
    }

    @media (max-width: 500px){
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background: var(--gradient-blue);

        h1{
            font-size: 5rem;
        }

        .mobileTop{
            background: var(--white);
            height: 30%;
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            .taskMobile{
                display: flex;
            }
        
            .titleMobile{
                display: flex;
            }

            .task{
                display: none
            }
        }    

        .whiteContainer{
       
            width: 100%;
            height: 80%;
            display: flex;
            justify-content: center;
        
        }
        
        .whiteBox{
            width: 80%;
            height: 60%;
            margin-top: 4rem;

            .title{
                display: none;
            }

            .boxText{
                p{
                    font-size: 2rem;
                }
            }
        }
        
    }
`
