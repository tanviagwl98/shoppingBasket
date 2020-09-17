import React, { useState } from "react";
import "./App.css";

import Products from "./Products";
import Basket from "./Basket";
//import {Link} from 'react-router-dom';
import { FaShoppingBasket, FaSearch } from "react-icons/fa";
//import SearchField from "react-search-field";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "basket";
const Bread_Bakery = "Bread & Bakery";

function Itemlist() {
  const [basket, setBasket] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const getBasketTotal = () => {
    return basket.reduce((sum, { quantity }) => sum + quantity, 0);
  };

  const search = {
    width: "38%",
    marginTop: "20px",
    height: "20px",
    borderRadius: "4px",
  };

  const [category, setCategory] = useState(Bread_Bakery);

  return (
    <div className="Itemlist">
      <header>
        <button
          style={{
            float: "right",
            width: "200px",
            margin: "5px",
            height: "60px",
            borderRadius: "5px",
          }}
          onClick={() => navigateTo(PAGE_CART)}
        >
          <p style={{ margin: "0", position: "relative" }}>
            {" "}
            <FaShoppingBasket
              style={{ width: "24px", height: "18px", margin: "0" }}
            />
          </p>{" "}
          My Basket ({getBasketTotal()})
        </button>

        <input
          type="text"
          className="input"
          placeholder="Search for products here"
          style={search}
          onChange={(e) => setCategory(e.target.value)}
        />

        <FaSearch
          onClick={() => navigateTo(category)}
          style={{
            width: "2%",
            height: "20px",
            position: "absolute",
            cursor: "pointer",
            marginTop: "20px",
            borderRadius: "4px",
            border: "2px solid black",
          }}
        />

        <button
          style={{
            float: "left",
            margin: "7px",
            height: "2.6rem",
            borderRadius: "5px",
          }}
          onClick={() => navigateTo(PAGE_PRODUCTS)}
        >
          Products
        </button>
      </header>
      {page === PAGE_PRODUCTS && (
        <Products basket={basket} setBasket={setBasket} />
      )}
      {page === PAGE_CART && <Basket basket={basket} setBasket={setBasket} />}
    </div>
  );
}

export default Itemlist;
