import { createContext, useContext, useReducer } from "react";
import Reducer from "../reducer/Reducer";

const ToggleContext = createContext(null);
const initialState = {
    isTrending: false,
    isPopular: false,
    isTopRates: false
}


const ToggleProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        <ToggleContext.Provider value={{ state, dispatch }} >
            {children}
        </ToggleContext.Provider>
    )
};

const useToggle = () => useContext(ToggleContext);

export { useToggle, ToggleProvider }