import styled from 'styled-components';

const MyButton = styled.button`
    width: 90px;
    height: 30px;
    background-color: ${props=>props.setColor};
    color: white;
    border: none;
    border-radius: 5px;
    margin: 5px;
    font-weight: bold;
    font-size: 0.8rem;
    box-shadow: 1px 1px 1px rgba(0,0,0,0.3);
    transition: 0.2s;
    :hover{
        opacity: 50%;
    }
`

export default MyButton;