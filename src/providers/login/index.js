import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { api } from '../../service/api'

export const LoginRequestContext = createContext();

export const LoginRequestProvider = ({ children }) => {

  const [ userLoginData, setUserLoginData ] = useState();

  const addTokenLocalStorage = (data) => {
    localStorage.setItem('@tasky/login/token', JSON.stringify(data));
  }

  const makeLoginRequest = () => {
    axios.post('https://kabit-api.herokuapp.com/sessions/', userLoginData)
      .then( response => addTokenLocalStorage(response.data.access) )
  }

  useEffect( () => {
    if (userLoginData) makeLoginRequest()
  }, [userLoginData]);

  return (
    <LoginRequestContext.Provider value={{setUserLoginData}} >
      {children}
    </LoginRequestContext.Provider>
  );
};