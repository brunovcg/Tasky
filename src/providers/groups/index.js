import { api } from '../../service/api';
import { createContext, useContext, useState } from "react";
// import jwt_decode from 'jwt-decode';

export const GroupsContext = createContext();

export const GroupsProvider = ({children}) => {
    
    const userToken = JSON.parse( localStorage.getItem('@tasky/login/token') );

    // const [decodedId] = useState(jwt_decode(userToken).user_id || '');

    const [ groups, setGroups ] = useState([{id: 1, name: 'Grupo teste', description: 'descrição teste', category: 'categoria teste'}]);

    const getGroups = () => {

        api.get('/groups/', {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        })
        .then((response) => setGroups(response.data))
    }

    return (
        <GroupsContext.Provider
            value={{groups, getGroups}}
        >
            {children}
        </GroupsContext.Provider>
    )

}

export const useGroups = () => useContext(GroupsContext);
