/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer, useState } from "react";
import Reducer from "../reducers/Reducer";

const AvatarContext = createContext(null);
const initialState = {
  users: [],
  userId: null,
};

const AvatarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [isNewUser, setIsNewUser] = useState(false);
  const [isRemoveUser, setIsRemoveUser] = useState(false);
  const [removedUserId, setRemoveUserId] = useState(null);

  return (
    <AvatarContext.Provider
      value={{
        state,
        dispatch,
        isNewUser,
        setIsNewUser,
        isRemoveUser,
        setIsRemoveUser,
        removedUserId,
        setRemoveUserId,
      }}
    >
      {children}
    </AvatarContext.Provider>
  );
};

const useAvatar = () => useContext(AvatarContext);

export { useAvatar, AvatarProvider };
