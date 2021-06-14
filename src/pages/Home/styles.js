import styled, {css} from 'styled-components'

export const Container = styled.div`

    display: flex;
    flex-diretion: row;
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

    p{
        font-size: 0.8rem;
        color: var(--maroon);
        margin-top: 1rem;
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
    }

    .buttonPlace{
        margin-top: 2rem;
        margin-bottom: -1rem;

        Button{
            margin: 1rem;
        }
    }

    @media (max-width: 660px){
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background: var(--gradient-blue);

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
        
        .whiteBox{

            margin-top: 4rem;

            .title{
                display: none;
            }
        }
        
    }
`
