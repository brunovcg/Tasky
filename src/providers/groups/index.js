import { api } from '../../service/api';
import { createContext, useContext, useState } from "react";
import jwt_decode from 'jwt-decode';
import { toast } from 'react-toastify';

export const GroupsContext = createContext();

export const GroupsProvider = ({children}) => {
    
    const [token] = useState(JSON.parse(localStorage.getItem('@tasky/login/token')) || '');

    const [decodedId] = useState(jwt_decode(token).user_id || '');

    const [ groups, setGroups ] = useState([]);

    const getGroups = () => {
        api.get('/groups/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => setGroups(response.data.results))
        //passar um filtro para mostrar os grupos que o usuário esta inserido
    }

    const newGroup = () => {
        api.post('/groups/', {
            headers: {
                Authorization: `Bearer ${token}`
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
