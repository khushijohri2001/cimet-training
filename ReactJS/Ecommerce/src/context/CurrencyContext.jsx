import { createContext, useContext } from "react";

const CurrencyContext = createContext();

export const CurrencyContextProvider = ({children}) => {
    
    return(
        <CurrencyContext.Provider>
            {children}
        </CurrencyContext.Provider>
    )
}

export const useCurrency = () => useContext(CurrencyContext);