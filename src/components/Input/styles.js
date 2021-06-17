import styled from 'styled-components';

export const Container = styled.div`
    text-align: left;
    background-color: var(--white);
    width: 100%;
    transition: 0.5s;
 

    input{
        background: transparent;
        padding-left: 2px;
        color: var(--dark-grey);
        width: 90%;
        &::placeholder{
            color: var(--grey)
        }
    }
    
`;


export const StyledInput = styled.input`
    background: var(--white);
    padding-left: 2px;
    color: var(--dark-grey);
    width: 90%;
    border: none;
    border-bottom: solid 1px var(--red);
    &::placeholder{
        color: var(--grey)
    }

` 