import './App.css'
import { Outlet } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import { CartContextProvider } from './context/CartContext';
import { BlogContextProvider } from './context/BlogContext';

function App() {

  return (
    <>
      <CartContextProvider>
        <BlogContextProvider>
          <Header />
          <Outlet />
          <Footer />
        </BlogContextProvider>
      </CartContextProvider>
    </>
  )
}

export default App
