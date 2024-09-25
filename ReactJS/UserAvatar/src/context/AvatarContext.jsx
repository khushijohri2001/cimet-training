/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer, useState } from "react";
import Reducer from "../reducers/Reducer";

const AvatarContext = createContext(null);
const initialState = {
    users: []
}

const AvatarProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState)
    const [isNewUser, setIsNewUser] =  useState(false)

    return(
        <AvatarContext.Provider value={{state, dispatch, isNewUser, setIsNewUser}}>
            {children}
        </AvatarContext.Provider>
    )
}

const useAvatar = () => useContext(AvatarContext);

export {useAvatar, AvatarProvider}