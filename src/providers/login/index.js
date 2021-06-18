import { createContext, useState, useEffect, useContext } from 'react';
import { api } from '../../service/api';
import {useAuth} from '../Authentication/Authentication'
import { toast } from 'react-toastify';

export const LoginRequestContext = createContext();

export const LoginRequestProvider = ({ children }) => {

  const [ userLoginData, setUserLoginData ] = useState();

  const {setAuthenticated} = useAuth()

  const addTokenLocalStorage = (data) => {
    localStorage.setItem('@tasky/login/token', JSON.stringify(data));
  }

  const addUserLocalStorage = (data) =>{
    localStorage.setItem('@tasky/login/user', JSON.stringify(data));
  }

  const makeLoginRequest = () => {
    api.post('sessions/', userLoginData.data)
      .then( response => {
        addTokenLocalStorage(response.data.access)
        addUserLocalStorage(userLoginData.data.username)
        setAuthenticated(true)
        toast.success(`Welcome!`)
        return userLoginData.redirect
      })
      .catch((_)=> toast.error("Something went wrong, try again!"))
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