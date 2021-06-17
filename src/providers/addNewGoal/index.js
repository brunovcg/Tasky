import { createContext, useState, useEffect, useContext } from "react";
import { api }                                            from '../../service/api';

export const NewGoalContext = createContext();

export const NewGoalProvider = ({ children }) => {

  const [newGoalData, setNewGoalData]             = useState();
  const [wichGroupToCreate, setWichGroupToCreate] = useState();
  const userToken                                 = JSON.parse( localStorage.getItem('@tasky/login/token') );

  const newGoalRequest = () => {

    newGoalData['group'] = wichGroupToCreate;
    
    const goalsConfig = { headers:
      { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`,
      }
    };
    
    api.post('goals/', newGoalData, goalsConfig)
      .then( response => response.status === 201 && window.location.reload() )
  };

  useEffect( () => {
    if (newGoalData) newGoalRequest();
  }, [newGoalData] );

  return (
    <NewGoalContext.Provider value={{setNewGoalData, setWichGroupToCreate}}> 
      { children }
    </NewGoalContext.Provider>
  );
};

export const useNewGoal = () => useContext(NewGoalContext);