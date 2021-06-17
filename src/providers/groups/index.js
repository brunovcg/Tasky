import { api } from '../../service/api';
import { createContext, useContext, useState } from "react";
import jwt_decode from 'jwt-decode';
import { toast } from 'react-toastify';
import { useGoalsList } from '../GetGoals';

export const GroupsContext = createContext();

export const GroupsProvider = ({children}) => {
    
    const [token] = useState(JSON.parse(localStorage.getItem('@tasky/login/token')) || '');

    const [decodedId] = useState(jwt_decode(token).user_id || '');

    const [ groups, setGroups ] = useState([]);

    

    // const newGroup = () => {

    //     const addGroup = {
    //         name: ,
    //         description,
    //         category,
    //         creator:  decodedId,
    //         users_on_groups: [],
    //         goals: [],
    //         activities: []
    //     }

    //     api.post('/groups/', addGroup, {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }
    //     }).then((_) => {
    //         toast.success('Group Added!')
    //     }).catch((_) => {
    //         toast.error('Something went wrong, try again!')
    //     })
    // }

    return (
        <GroupsContext.Provider
            value={{groups, setGroups}}
        >
            {children}
        </GroupsContext.Provider>
    )

}

export const useGroups = () => useContext(GroupsContext);
