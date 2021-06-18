import { createContext, useContext, useState } from "react";

export const GroupsContext = createContext();

export const GroupsProvider = ({children}) => {
    
    const [token] = useState(JSON.parse(localStorage.getItem('@tasky/login/token')) || '');

    const [ groups, setGroups ] = useState([]);

    return (
        <GroupsContext.Provider
            value={{groups, setGroups}}
        >
            {children}
        </GroupsContext.Provider>
    )

}

export const useGroups = () => useContext(GroupsContext);
