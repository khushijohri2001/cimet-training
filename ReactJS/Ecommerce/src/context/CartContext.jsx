import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [productsInCart, setProductsInCart] = useState(localStorage.getItem("cart") ?
     JSON.parse(localStorage.getItem("cart"))
     : []
    );
    const [totalPrice, setTotalPrice] = useState(0)

    const addToCartHandler = (productToAdd) => {
        setProductsInCart([...productsInCart, { ...productToAdd, quantity: 1 }]);
    }

    const deleteFromCartHandler = (productToRemove) => {
        const updatedCart = productsInCart.filter((product) => product.id !== productToRemove.id);

        setProductsInCart(updatedCart)
    }

    const incrementQuantity = (productToUpdate) => {
        const updatedCart = productsInCart.map((product) => product.id === productToUpdate.id ? { ...product, quantity: product.quantity + 1 } : product);

        setProductsInCart(updatedCart)
    }

    const decrementQuantity = (productToUpdate) => {
        const updatedCart = productsInCart.map((product) => product.id === productToUpdate.id ? { ...product, quantity: product.quantity - 1 } : product);

        setProductsInCart(updatedCart)
    }

    const totalPriceHandler = () => {
        const total = productsInCart.reduce((acc, cur) => (cur.price * cur.quantity) + acc, 0);
        setTotalPrice(total)
    }


    return (
        <CartContext.Provider value={{ productsInCart, addToCartHandler, deleteFromCartHandler, incrementQuantity, decrementQuantity, totalPrice, totalPriceHandler }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext) 