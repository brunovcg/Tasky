import { createContext, useState, useEffect } from "react";
import { api }                                from '../../service/api';

export const ActivitieContext = createContext();

export const ActivitieProvider = ({ children }) => {
    const userToken = JSON.parse( localStorage.getItem('@tasky/login/token') );

    const [activitiesRenderList, setActivitiesRenderList] = useState([])
    
    const handleAddActivitie = () => {

        api.get('/groups/442/', {
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken}`,
            },
          })
          .then(response => setActivitiesRenderList(response.data.activities))
        //   .then(response => setGoalsData(response.data.goals))

    };
    
    useEffect(() => {
        if (activitiesRenderList) handleAddActivitie();
      }, []);

    return (
        <ActivitieContext.Provider value={{activitiesRenderList}}>
            {children}
        </ActivitieContext.Provider>
    )
}