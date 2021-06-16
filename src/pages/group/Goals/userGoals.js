import axios from 'axios';

export const UserGoals = (setGoalsList) => {
  const token = JSON.parse(localStorage.getItem('@tasky/login/token'));

  const goalsQuery = {
    params: { group: 442, },
  }

  return axios.get('https://kabit-api.herokuapp.com/goals/', goalsQuery)
    .then(response => setGoalsList(response.data.results))
};