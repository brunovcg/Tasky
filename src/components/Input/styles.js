import styled from 'styled-components';

export const Container = styled.div`
    text-align: left;
    background: var(--white);
    border: 0.5px solid var(--dark-grey);
    padding: 1rem;
    width: 100%;
    transition: 0.5s;
    height: 30px;

    input{
        background: transparent;
        color: var(--grey);
        border: 0;
        height: 100%;
        width: 100%;
        &::placeholder{
            color: var(--grey);
        }
    }
`;