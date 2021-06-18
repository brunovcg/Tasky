import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 500px) {
        height: 100%;
    }
    

    h3 {
        color: var(--dark-grey);
        width: 80%;
        margin-bottom: 20px;
        text-align: center;
        font-size: 1rem;

        @media (max-width:500px){
            margin: 30px 0;
        }
    }

    img {
        max-width: 100%;
        height: 100%;
        box-shadow: 0px 10px 15px rgba(0,0,0,0.3);

        @media (max-width:500px){
            width: 80%;
        }
    }
`;