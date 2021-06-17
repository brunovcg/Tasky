import styled, {css} from 'styled-components'
import back from '../../assets/background.jpg'

export const Container = styled.div`

    width: 100vw;
    height: 100vh;
    background-image: url(${back});
    background-size: cover;
    background-repeat: no-repeat;

    .transparentBox{
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background-color: var(--transparent-black);
        box-shadow: 0 0 0 20px white;

        .headerBox{
            height: 100%;
            width: 55%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            h2{
                display: flex;
                align-items: flex-end;
                color: var(--white);
                font-family: 'Poppins', sans-serif;
                font-size: 5.5rem;
                height:50%;
            }

            p{
                color: var(--grey);
                text-align: center;
                height:20%;

                a{
                    color: var(--red)
                }
            }

            h1{
                text-align: center;
                height:30%;
                display: flex;
                align-items: center;
            }
        }

        .whiteBox{
            height: 100%;
            width: 45%;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            background-color: var(--white);
            
            h3{
                display: flex;
                justify-content: center;
                align-items: flex-end;
                text-align: center;
                height: 20%;
                font-family: 'Poppins', sans-serif;
                color: var(--dark-grey);
                font-size: 2 rem;
            }

            form{
                height: 80%;
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                .whiteForm{
                    height: 100%;
                    width: 80%;
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    align-items: center;

                    input{
                        height: 40px;             
                    }

                    .formError{
                        height: 35px;
                        color: var(--dark-red);
                        width: 90%;
                        padding-left: 5px;
                    
                        p{
                            font-size: 0.7rem;
                            text-align: justify;
                        }       
                    }
                }
            }

            .buttonBox{
                height: 20%;
                display: flex;
                justify-content: center;
                align-items: flex-end;
            }
        }
    }

    @media (max-width:500px){

        .transparentBox{
            flex-direction: column;

            .headerBox{
                width: 100%;
                height: 30%;

                h2{
                    font-size: 3.5rem;
                }
            }

            .whiteBox{
                width: 100%;
                height: 70%;

                h3{
                    height: 10%;
                }

                form{
                    height: 90%;

                    .whiteForm{
                        height: 100%;

                        .formError{

                          p{
                            font-size: 0.85rem;
                          }
                        }
                    }
                }
            }
        }
    }
`