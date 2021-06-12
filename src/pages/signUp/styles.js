import styled, {css} from 'styled-components'

export const Container = styled.div`

    display: flex;
    width: 100%;
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
        background-color: var(--white);
        
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

            .blueBoxFormError{
                height: 5%;
                margin-top: 1px;
                margin-bottom: 5px;

                p{               

                    width: 80%;
                    padding-left: 2px;
                    height: 1rem;
                    height: fit-content;
                    background-color: var(--dark-red);
                    font-size: 1rem;
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

    @media (max-width: 660px){

        flex-direction: column;

        .whiteBox, .blueBox{
            width: 100vw;
        }

        .whiteBox{
            height: 25%;

            .whiteBoxTitle{
                padding-top:15%;
            }

            .whiteBoxName{
                position: absolute;
                top: 15px;
                left: 15px;
            }
        }

        .blueBox{
            height: 75%;

            .blueBoxForm{

                .blueBoxFormError{
                    height: 8%;

                    p{               
                        width: 80%;
                        background-color: var(--dark-red);
                        font-size: 1.2rem;         
                    }
            }
        }
    }

}`