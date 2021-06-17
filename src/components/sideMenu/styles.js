import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    
 
    @media (max-width: 500px) {
        visibility: ${props => {
            if (props.setVisibility === 'hidden') {return 'hidden'}
            else if (props.setVisibility === 'visible') {return 'visible'}
        }};
        position: absolute;
        z-index: 2;
        width: 50%;
               
        box-shadow: 0px 4px 5px rgba(0,0,0,0.5);
    }
`;

export const MenuBurguer = styled.button`
    left: 10px;
    top: 10px;
    background-color: transparent;
    border: none;
    color: var(--red);
    position: absolute;
    z-index: 3;
`;

export const UserContainer = styled.div`
    text-align: center;

    p {
        text-align: center;
        color: var(--dark-grey);
        font-weight: bold;     

        @media (max-width: 500px) {
        font-size: 1.5rem;
    }  
    }

    

`;

export const Img = styled.img`
    width: 4rem;
    padding: 0.3rem;
    border-radius: 50%;
    background-color: #dcdcdc;
    margin-top: 2rem;
    align-items: center;

    @media (max-width: 500px) {
        width: 5rem;
    }
`;

export const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
`;

export const StyledLink = styled.div`
    border-bottom: 1px solid var(--blue);
    font-size: 1rem;
    margin: 1rem;

    a {
        color: var(--blue);

        @media (max-width: 500px) {
            font-size: 1.5rem;
        }
    }

    :hover {
        font-weight: bold;
        border-bottom: 2px solid var(--white);
    }

    @media (max-width: 500px) {
        font-size: 0.8rem;
    }
`;

export const ButtonContainer = styled.div`
    margin: 1rem;

    button{
        transition: none;
    }
    

    
`;

export const GroupMembers = styled.div`
    height: fit-content;
    width: 90%;
`;

export const MembersContainer = styled.div`
    background-color: var(--blue);
    width: 90%;
    height: fit-content;
    color: var(--white);
    font-size: 0.8rem;
    padding-left: 5px;
   
`