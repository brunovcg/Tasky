import styled, {css} from 'styled-components'

export const Container = styled.div`

    display: flex;
    width: 100vw;
    height: 100vh;

    .whiteBox, .blueBox{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; 
    }

    .whiteBox{
        
        .whiteBoxTitle{
            height: 85%;
            display: flex;
            flex-direction: column;
            justify-content: center;

            h2{
                font-size: 2.5rem;
                text-align: center;
                color: var(--red);
            }

            p{
                font-size: 0.8rem;
                color: var(--dark-red);
            }

            a{
                color: var(--blue)
            }
        }

        .whiteBoxName{
            height: 15%;
            
            h1{
                font-size: 2rem;
            }
        }
    }

    .blueBox{
        background: var(--gradient-blue);
        display: flex;
        flex-direction: column;
        justify-content: center;

        .blueBoxForm{
            height: 85%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-top: 20px;

            input{
                
            }

            .blueBoxFormError{
                height: 5%;
                margin: 2px;

                p{               

                    width: 80%;
                    padding-left: 2px;
                    height: 1rem;
                    height: fit-content;
                    background-color: var(--dark-red);
                    font-size: 0.6rem;
                    font-variant: small-caps;
                    color: var(--white);
                    font-family: sans-serif;
                    font-weight: bold;  

                    ${ props=> props.isError && css`
                        display: flex;                                                                
                    `}
                }
            }
        }

        .blueBoxButton{
            height: 15%;
        }
    }
    


`