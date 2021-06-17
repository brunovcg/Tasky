import { createContext, useState } from 'react';
import axios from 'axios';

export const CurrentGoalsListContext = createContext();

// export const UserGoals = (setGoalsList) => {
export const UserGoalsProvider = ({ children }) => {

  const [goalsList, setGoalsList] = useState();

  const [whichGroup, setWhichGroup] = useState();

  const goalsQuery = {
    params: { group: whichGroup, },
  }

  axios.get('https://kabit-api.herokuapp.com/goals/', goalsQuery)
    .then(response => setGoalsList(response.data.results))


  return (
    <CurrentGoalsListContext.Provider value={{goalsList, setGoalsList, setWhichGroup}} >
      { children }
    </CurrentGoalsListContext.Provider>
  )
};

export const useGoalsList = () => createContext(CurrentGoalsListContext)