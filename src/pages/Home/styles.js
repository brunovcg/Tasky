import styled, {css} from 'styled-components'

export const Container = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
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
        font-size: 150%;
        color: var(--maroon);
        margin-top: 1rem;
        text-align: center;
    }

    h1{
        font-size: 550%;
    }

    .whiteBox{
        background-color: var(--white);
        height: 65%;
        width: 35%;
        margin-top: 2rem;
        border-radius: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }

    .task {
        img {
            width: 40vw;
        }
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
        justify-content: flex-start;
        align-items: center;
        justify-content: flex-start;
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
            top: 0rem;

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
        
        p{
            font-size: 155%;
        }
    
        h1{
            font-size: 450%;
        }

        .whiteBox{
            height: 50%;
            width: 80%;
            margin-top: 4rem;

            .title{
                display: none;
            }
        }
        
    }
`
