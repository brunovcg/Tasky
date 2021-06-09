import styled from 'styled-components';

const MyButton = styled.button`
    width: ${props=> {if(props.setSize === "large") {return "90px"}     
        else if (props.setSize === "medium") { return "70px"} 
        else {return "50px"}
    }};
    height: 30px;
    background-color: ${props=>props.setColor};
    color: white;
    border: none;
    border-radius: 5px;
    margin: 5px;
    font-weight: bold;
    font-size: ${props=> {if(props.setSize === "large") {return "0.8rem"}     
        else if (props.setSize === "medium") { return "0.7rem"} 
        else {return "0.5rem"}
    }};
    box-shadow: 1px 1px 1px rgba(0,0,0,0.3);
    transition: 0.2s;
    :hover{
        opacity: 50%;
    }
`

export default MyButton;