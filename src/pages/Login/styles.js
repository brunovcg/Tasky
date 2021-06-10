import { Grid, Typography } from '@material-ui/core';
import { styled as materialStyled } from '@material-ui/core';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledGrid = materialStyled(Grid) ( ({ theme }) => ({
  width: '100vw',
  height: '100vh',
  background: 'white',
}))

export const HeaderGrid = materialStyled(Grid) ( ({ theme }) => ({
  width: '100%',
  height: '30%',
}))

export const BodyGrid = materialStyled(Grid) ( ({ theme }) => ({
  width: '100%',
  height: '70%',
  backgroundImage: 'var(--gradient-blue)'
}))


export const FirstDiv = styled.div `
  width: 100%;
  height: 25%;
  /* background-color: firebrick; */
`

export const SecondDiv = styled.div `
    width: 100%;
    height: 40%;

    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: green; */
`

export const H1 = styled.h1 `
  font-size: 150%;
  padding: 2%;
`

export const H1Title = styled.h1 `
  font-family: unset;
  font-size: 280%;
`

export const H1text = styled.p `
  color: var(--dark-red);
`

export const StyledLink = styled(Link) `
  color: var(--blue);
  font-weight: 600;
`

export const ThirdDiv = styled.div `
  width: 100%;
  height: 35%;

  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: pink; */
`

export const InputDiv = styled.div `
  width: 50%;
  height: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: pink; */
`