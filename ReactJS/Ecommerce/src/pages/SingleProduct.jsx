import { useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useCurrency } from "../context/CurrencyContext";
import DeleteFromCartButton from "../components/buttons/DeleteFromCartButton";
import AddToCartButton from "../components/buttons/AddToCartButton";
import { useEffect } from "react";
import { useState } from "react";

const SingleProduct = () => {
  const {
    state: { from },
  } = useLocation();

  const { id, title, image, category, description, price } = from;

  const { addToCartHandler, deleteFromCartHandler, productsInCart } = useCart();
  
  const { convertedPrice, rateSymbolHandler } = useCurrency();

  const [isInCart, setIsInCart] = useState(false)

  const onAddButtonClickHandler = () => {
    addToCartHandler(from)
  }

  const onDeleteButtonClickHandler = () => {
    deleteFromCartHandler(from)
  }

  useEffect(() => {
   const product = productsInCart.find((product) => product.id === id)
   setIsInCart(product ? true : false)
  }, [productsInCart, id])

  return (
    <div className="flex gap-48 items-center justify-center m-8 h-screen">
      <div>
        <img src={image} alt={title} className="w-96 h-80 object-contain" />
      </div>
      <div className="w-[30rem] flex flex-col gap-10">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p>{description}</p>
          <p>Category: {category}</p>
          <p>
            {rateSymbolHandler()}
            {convertedPrice(price)}
          </p>
        </div>

        {isInCart ? (
          <DeleteFromCartButton onClick={onDeleteButtonClickHandler} />
        ) : (
          <AddToCartButton onClick={onAddButtonClickHandler} />
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
