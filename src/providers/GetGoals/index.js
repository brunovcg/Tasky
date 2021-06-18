import { createContext, useState, useContext, useEffect } from 'react';
import axios                                              from 'axios';

export const CurrentGoalsListContext = createContext();

export const UserGoalsProvider = ({ children }) => {

  const [goalsList, setGoalsList]   = useState();
  const [whichGroup, setWhichGroup] = useState();

  const goalsQuery = {
    params: { group: whichGroup, },
  }

  useEffect( () => {

    if (whichGroup) {
      
      axios.get('https://kabit-api.herokuapp.com/goals/', goalsQuery)
        .then(response => setGoalsList(response.data.results))
    }
  }, [whichGroup]);

  return (
    <CurrentGoalsListContext.Provider value={{goalsList, setGoalsList, setWhichGroup, whichGroup}} >
      { children }
    </CurrentGoalsListContext.Provider>
  )
};

export const useGoalsList = () => useContext(CurrentGoalsListContext)