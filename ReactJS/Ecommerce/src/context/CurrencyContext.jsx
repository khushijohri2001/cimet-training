import { useState } from "react";
import { createContext, useContext } from "react";

const CurrencyContext = createContext();

export const CurrencyContextProvider = ({children}) => {
    const [selectedCurrency, setSelectedCurrency] = useState("INR");
    const [exchangeRateList, setExchangeRateList] = useState([]);
    const exchangeRate = exchangeRateList[selectedCurrency];
    const convertedPrice  = (price) => (price*exchangeRate).toFixed(2)

    const selectedCurrencyHandler = (e) => {
        setSelectedCurrency(e.target.value)
    }

    const exchangeRateHandler = (data) => {
        setExchangeRateList(data)
    }


  const rateSymbolHandler = () => {
    if(selectedCurrency === "INR"){
      return "₹"
    } else if(selectedCurrency === "USD"){
      return "$" 
    } else if(selectedCurrency === "AUD"){
      return "AU$"
    }
  }
    
    return(
        <CurrencyContext.Provider value={{selectedCurrency, selectedCurrencyHandler, exchangeRateList, exchangeRateHandler, convertedPrice, rateSymbolHandler}}>
            {children}
        </CurrencyContext.Provider>
    )
}

export const useCurrency = () => useContext(CurrencyContext);