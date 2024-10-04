import './App.css'
import { useLoaderData } from "react-router-dom";
import { CartContextProvider } from './context/CartContext';
import { BlogContextProvider } from './context/BlogContext';
import { CurrencyContextProvider } from "./context/CurrencyContext";
import Wrapper from './components/Wrapper';

function App() {
  const data = useLoaderData();
  
  return (
    <>
    <CurrencyContextProvider>
      <CartContextProvider>
        <BlogContextProvider>
          <Wrapper data={data}/>
        </BlogContextProvider>
      </CartContextProvider>
      </CurrencyContextProvider>
    </>
  )
}

export default App
