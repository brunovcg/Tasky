import { createContext, useState, useEffect, useContext } from 'react';
import { api } from '../../service/api';

export const LoginRequestContext = createContext();

export const LoginRequestProvider = ({ children }) => {

  const [ userLoginData, setUserLoginData ] = useState();

  const addTokenLocalStorage = (data) => {
    localStorage.setItem('@tasky/login/token', JSON.stringify(data));
  }

  const makeLoginRequest = () => {
    api.post('sessions/', userLoginData.data)
      .then( response => {
        addTokenLocalStorage(response.data.access)
        return userLoginData.redirect
      })
  }

  useEffect( () => {
    if (userLoginData) makeLoginRequest()
  }, [userLoginData]);

  return (
    <LoginRequestContext.Provider value={{setUserLoginData, userLoginData}} >
      {children}
    </LoginRequestContext.Provider>
  );
};

export const useLoginData = () => useContext(LoginRequestContext);