import { createContext, useState, useEffect } from 'react';
import { api } from '../../service/api';
import {useAuth} from '../Authentication/Authentication'

export const LoginRequestContext = createContext();

export const LoginRequestProvider = ({ children }) => {

  const [ userLoginData, setUserLoginData ] = useState();

  const {authenticated, setAuthenticated} = useAuth()

  const addTokenLocalStorage = (data) => {
    localStorage.setItem('@tasky/login/token', JSON.stringify(data));
  }
  console.log(userLoginData)
  const makeLoginRequest = () => {
    api.post('sessions/', userLoginData.data)
      .then( response => {
        addTokenLocalStorage(response.data.access)
        setAuthenticated(true)
        return userLoginData.redirect
      })
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