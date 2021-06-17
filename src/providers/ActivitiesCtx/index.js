import { createContext, useState, useEffect } from "react";
import { api } from '../../service/api';
import { toast } from 'react-toastify'

export const ActivitieContext = createContext();

export const ActivitieProvider = ({ children }) => {
    const userToken = JSON.parse( localStorage.getItem('@tasky/login/token') );

    const [activitiesRenderList, setActivitiesRenderList] = useState([])
    
    const handleLoadActivities = () => {

        api.get('/groups/442/', {
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken}`,
            },
          })
          .then(response => setActivitiesRenderList(response.data.activities))
        //   .then(response => setGoalsData(response.data.goals))

    };

    const addActivitie = ({title}) => {
        const activitieAddTitle = {
            title,
            realization_time: "2021-03-10T15:00:00Z",
            group: "442"
        }
        
        api.post(
            '/activities/',
            activitieAddTitle,
            {
             headers: {
                 Authorization: `Bearer ${userToken}`,
             },
            }
        )
        .then((_)=>{
            toast.success(`Added!`)
            handleLoadActivities()
         })
        .catch((_)=> toast.error("Something went wrong, try again!"))
    }

    const deleteActivitie = (activitie) =>{
        api.delete(
            `/activities/${activitie.id}/`, 
                {
                    headers: {
                        Authorization: `Bearer ${userToken}`,
                    },
            })
                .then((_)=>{
                    toast.success(`${activitie.title} deleted`)
                    handleLoadActivities()
                })
                .catch((_)=> toast.error("Something went wrong, try again!"))
    }
    
    useEffect(() => {
        if (activitiesRenderList) handleLoadActivities();
      }, []);

    return (
        <ActivitieContext.Provider value={{
                                            activitiesRenderList, 
                                            deleteActivitie, 
                                            addActivitie
                                        }}>
            {children}
        </ActivitieContext.Provider>
    )
}