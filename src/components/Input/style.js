import styled from 'styled-components';

export const Container = styled.div`
    text-align: left;
    background: var(--white);
    border: 2px solid var(--dark-grey)
    padding: 1rem;
    width: 100%;
    transition: 0.5s;

    input{
        background: transparent;
        color: var (--grey)
        border: 0;
        &::placeholder{
            color: var(--grey)
        }
    }
`;