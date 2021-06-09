import { Paper, Grid, styled as materialStyled } from '@material-ui/core';
import styled from 'styled-components';

export const StyledGrid = materialStyled(Grid) ( ({ theme }) => ({
  position: 'absolute',
  width: '25vw',
  height: '40vh',
  left: '35vw',
  top: '35vh',
}));

export const StyledPaper = materialStyled(Paper) ( ({ theme }) => ({
  width: '100%',
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundImage: 'var(--gradient-blue)',
}));

export const DivH1 = styled.div `
  width: 80%;
  height: 10%;
`;

export const H1 = styled.h1 `
  font-size: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: white;
`;

export const Form = styled.form `
  width: 80%;
  height: 60%;
  margin-bottom: 10%;
`;

export const InputsDiv = styled.div `
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

`;

export const EachDivInput = styled.div `
`;

export const DivInput = styled.div `
  width: 80%;
`;

export const Input = styled.input `
  width: 100%;
  padding: 4% 5%;
  border: none;
`;



