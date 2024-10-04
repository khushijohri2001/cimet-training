import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { useCurrency } from "../context/CurrencyContext";
import { useEffect } from "react";

const Wrapper = ({data}) => {
    const { exchangeRateHandler } = useCurrency();

    useEffect(() => {
        exchangeRateHandler(data)
    }, [])
    
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Wrapper