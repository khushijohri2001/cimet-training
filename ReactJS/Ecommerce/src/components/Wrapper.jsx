/* eslint-disable react/prop-types */
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useCurrency } from "../context/CurrencyContext";
import { useEffect } from "react";

const Wrapper = ({ data }) => {
  const { exchangeRateHandler } = useCurrency();

  const location = useLocation();

  useEffect(() => {
    exchangeRateHandler(data);
    location.pathname !== "/blogs" ||
      (location.pathname !== "/blogs/:blogId" &&
        localStorage.setItem("blogPage", 1));
  }, [location]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Wrapper;
