import React from "react";
import "./basket.css";
import { FaShoppingBasket } from "react-icons/fa";

export default function Basket({ basket, setBasket }) {
  const getTotalSum = () => {
    return basket.reduce((sum, { cost, quantity }) => sum + cost * quantity, 0);
  };

  const clearBasket = () => {
    setBasket([]);
  };

  const setQuantity = (product, amount) => {
    const newBasket = [...basket];
    newBasket.find((item) => item.name === product.name).quantity = amount;
    setBasket(newBasket);
  };

  const removeFromBasket = (productToRemove) => {
    setBasket(basket.filter((product) => product !== productToRemove));
  };

  return (
    <>
      <h1>
        Basket <FaShoppingBasket style={{ width: "26px", height: "24px" }} />
      </h1>
      {basket.length === 0 && <h3>Your Basket is Empty, start shopping now</h3>}

      {basket.length > 0 && (
        <button onClick={clearBasket} style={{}}>
          Clear Basket
        </button>
      )}
      <div className="products">
        {basket.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>Rs. {product.cost}</h4>
            <input
              style={{ textAlign: "center", width: "35px", height: "30px" }}
              value={product.quantity}
              onChange={(e) => setQuantity(product, parseInt(e.target.value))}
            />
            <br />
            <br />
            <img src={product.image} alt={product.name} />
            <button onClick={() => removeFromBasket(product)}>Remove</button>
          </div>
        ))}
      </div>
      <br />
      <br />
      <div>Total Cost: Rs. {getTotalSum()}</div>
      {basket.length === 0 && (
        <button
          className="confirm"
          onClick={() =>
            alert("Your basket is EMPTY, please add items from Products")
          }
        >
          {" "}
          CheckOut
        </button>
      )}
      {basket.length > 0 && (
        <button
          className="confirm"
          onClick={() => alert("Thank you for shopping with us")}
        >
          {" "}
          CheckOut
        </button>
      )}
    </>
  );
}
