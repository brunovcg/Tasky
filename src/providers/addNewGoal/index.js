import { createContext, useState, useEffect, useContext } from "react";
import { api }                                            from '../../service/api';


export const GoalsRequestsContext = createContext();

export const GoalsRequestsProvider = ({ children }) => {


  const [newGoalData, setNewGoalData]             = useState();
  const [wichGroupToCreate, setWichGroupToCreate] = useState();
  const userToken                                 = JSON.parse( localStorage.getItem('@tasky/login/token') );

  const [goalsList, setGoalsList]   = useState();
  const [whichGroup, setWhichGroup] = useState();

  const getGoalsQuery = {
    params: { group: whichGroup, },
  }

  const getGoals = () => {
    api.get('goals/', getGoalsQuery) //REFATORADO
    .then(response => setGoalsList(response.data.results))
  }

  useEffect( () => {
    if (whichGroup) getGoals();
  }, [whichGroup]);


  const newGoalRequest = () => {

    newGoalData['group'] = wichGroupToCreate;
    
    const goalsConfig = { headers:
      { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`,
      }
    };
    
    api.post('goals/', newGoalData, goalsConfig)
      .then( response => response.status === 201 && getGoals() )
  };


  useEffect( () => {
    if (newGoalData) newGoalRequest();
    
  }, [newGoalData] );


  return (
    <GoalsRequestsContext.Provider value={{setNewGoalData, setWichGroupToCreate, goalsList, setGoalsList, setWhichGroup, whichGroup}}> 
      { children }
    </GoalsRequestsContext.Provider>
  );
};

export const useGoalsRequest = () => useContext(GoalsRequestsContext)