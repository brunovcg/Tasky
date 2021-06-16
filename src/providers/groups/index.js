import { api } from '../../service/api';
import { createContext, useContext, useState } from "react";
// import jwt_decode from 'jwt-decode';
import { toast } from 'react-toastify';

export const GroupsContext = createContext();

export const GroupsProvider = ({children}) => {
    
    const userToken = JSON.parse( localStorage.getItem('@tasky/login/token') );

    // const [decodedId] = useState(jwt_decode(userToken).user_id || '');

    const [ groups, setGroups ] = useState([]);

    const getGroups = () => {
        api.get('/groups/', {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        })
        .then((response) => setGroups(response.data))
    }

    const newGroup = () => {
        api.post('/groups/', {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        }).then((_) => {
            toast.success('Group Added!')
        }).catch((_) => {
            toast.error('Something went wrong, try again!')
        })
    }

    return (
        <GroupsContext.Provider
            value={{groups, getGroups, newGroup}}
        >
            {children}
        </GroupsContext.Provider>
    )

}

export const useGroups = () => useContext(GroupsContext);
