import { createContext, useState, useEffect, useContext } from "react";
import { api }                                from '../../service/api';
import { useGoalsList, UserGoalsProvider }                       from "../GetGoals";

export const NewGoalContext   = createContext();

export const NewGoalProvider  = ({ children }) => {

  const [newGoalData, setNewGoalData] = useState();
  const userToken                     = JSON.parse( localStorage.getItem('@tasky/login/token') );
  // const { whichGroup }                = useContext(UserGoalsProvider);

  const newGoalRequest = () => {

    // newGoalData['group'] = whichGroup;

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
    <NewGoalContext.Provider value={{setNewGoalData}}> 
      { children }
    </NewGoalContext.Provider>
  );
};