import React, { useState } from "react";
import "./App.css";

const Bread_Bakery = "Bread & Bakery";
const Grains_Pulses = "Grains & Pulses";
const Dairy_Jarred = "Dairy & Jarred";
const Snacks = "Snacks";
const Cleaners_Care = "Cleaners & Care";
const FruitsVeg = "Fruits & Vegetables";

export default function Products({ setBasket, basket }) {
  const [products] = useState([
    {
      category: Grains_Pulses,
      name: "Pulses/kg",
      cost: 40,
      mrp: 46,
      image: require("./assets/images/pulses.jpeg"),
    },

    {
      category: Grains_Pulses,
      name: "Flour/kg",
      cost: 30,
      mrp: 36,
      image: require("./assets/images/flour.jpeg"),
    },
    {
      category: Grains_Pulses,
      name: "Peas/kg",
      cost: 33,
      mrp: 36,
      image: require("./assets/images/peas.jpeg"),
    },
    {
      category: Grains_Pulses,
      name: "Rice/kg",
      cost: 35,
      mrp: 36,
      image: require("./assets/images/rice.jpeg"),
    },

    {
      category: Grains_Pulses,
      name: "Spices",
      cost: 15,
      mrp: 20,
      image: require("./assets/images/masale.jpeg"),
    },

    {
      category: Grains_Pulses,
      name: "Chole/kg",
      cost: 68,
      mrp: 76,
      image: require("./assets/images/chole.jpeg"),
    },

    {
      category: Bread_Bakery,
      name: "Bread",
      cost: 48,
      mrp: 50,
      image: require("./assets/images/bread.jpeg"),
    },
    {
      category: Bread_Bakery,
      name: "Bun",
      cost: 25,
      mrp: 26,
      image: require("./assets/images/bun.jpeg"),
    },
    {
      category: Bread_Bakery,
      name: "Bakery Biscuit",
      cost: 40,
      mrp: 46,
      image: require("./assets/images/biscuit.jpeg"),
    },
    {
      category: Bread_Bakery,
      name: "Cookies",
      cost: 35,
      mrp: 36,
      image: require("./assets/images/cookie.jpeg"),
    },
    {
      category: Grains_Pulses,
      name: "Coffee",
      cost: 33,
      mrp: 36,
      image: require("./assets/images/coffee.jpeg"),
    },
    {
      category: Grains_Pulses,
      name: "Tea",
      cost: 25,
      mrp: 26,
      image: require("./assets/images/tea.jpeg"),
    },

    {
      category: Dairy_Jarred,
      name: "Milk",
      cost: 22,
      mrp: 26,
      image: require("./assets/images/milkk.jpeg"),
    },
    {
      category: Dairy_Jarred,
      name: "Cheese",
      cost: 99,
      mrp: 100,
      image: require("./assets/images/cheeze.jpeg"),
    },
    {
      category: Dairy_Jarred,
      name: "Butter",
      cost: 48,
      mrp: 49,
      image: require("./assets/images/butter.jpeg"),
    },
    {
      category: Dairy_Jarred,
      name: "Curd",
      cost: 15,
      mrp: 16,
      image: require("./assets/images/curd.jpeg"),
    },
    {
      category: Dairy_Jarred,
      name: "Mayonies",
      cost: 28,
      mrp: 30,
      image: require("./assets/images/meonies.jpeg"),
    },
    {
      category: Dairy_Jarred,
      name: "Sauces",
      cost: 79,
      mrp: 90,
      image: require("./assets/images/sause.jpeg"),
    },
    {
      category: Dairy_Jarred,
      name: "Peanut Butter",
      cost: 98,
      mrp: 105,
      image: require("./assets/images/penut-butter.jpeg"),
    },
    {
      category: Dairy_Jarred,
      name: "Jam",
      cost: 45,
      mrp: 50,
      image: require("./assets/images/jam.jpeg"),
    },
    {
      category: Dairy_Jarred,
      name: "Vinegar",
      cost: 48,
      mrp: 50,
      image: require("./assets/images/vineger.jpeg"),
    },
    {
      category: Dairy_Jarred,
      name: "Soya Sauce",
      cost: 50,
      mrp: 60,
      image: require("./assets/images/soya_sauce.jpeg"),
    },
    {
      category: Dairy_Jarred,
      name: "Chilli Sauce",
      cost: 56,
      mrp: 60,
      image: require("./assets/images/chilli_sause.jpeg"),
    },
    {
      category: Snacks,
      name: "Wafers",
      cost: 10,
      mrp: 16,
      image: require("./assets/images/wafer.jpeg"),
    },
    {
      category: Snacks,
      name: "Biscuits",
      cost: 20,
      mrp: 26,
      image: require("./assets/images/biscuits.jpeg"),
    },
    {
      category: Snacks,
      name: "Cold Drinks",
      cost: 100,
      mrp: 106,
      image: require("./assets/images/colddrinks.jpeg"),
    },
    {
      category: Snacks,
      name: "Juices",
      cost: 40,
      mrp: 46,
      image: require("./assets/images/juices.jpeg"),
    },

    {
      category: Snacks,
      name: "Masala_Kaju",
      cost: 45,
      mrp: 46,
      image: require("./assets/images/kaju.jpeg"),
    },

    {
      category: Cleaners_Care,
      name: "Masks",
      cost: 14,
      mrp: 10,
      image: require("./assets/images/masks.jpeg"),
    },
    {
      category: Cleaners_Care,
      name: "Dettol Handwash",
      cost: 48,
      mrp: 49,
      image: require("./assets/images/detol.jpeg"),
    },

    {
      category: Cleaners_Care,
      name: "Surf & Bars",
      cost: 38,
      mrp: 46,
      image: require("./assets/images/surf.jpeg"),
    },
    {
      category: Cleaners_Care,
      name: "Hand Wash",
      cost: 30,
      mrp: 46,
      image: require("./assets/images/senitizer.jpeg"),
    },

    {
      category: Cleaners_Care,
      name: "Sanitizers",
      cost: 45,
      mrp: 46,
      image: require("./assets/images/sanitize.jpeg"),
    },
    {
      category: Cleaners_Care,
      name: "Cream",
      cost: 98,
      mrp: 100,
      image: require("./assets/images/cream.jpeg"),
    },
    {
      category: Cleaners_Care,
      name: "Shampoos",
      cost: 105,
      mrp: 40,
      image: require("./assets/images/shampoo.jpeg"),
    },
    {
      category: Cleaners_Care,
      name: "Soap",
      cost: 35,
      mrp: 38,
      image: require("./assets/images/soap.jpeg"),
    },
    {
      category: FruitsVeg,
      name: "Apple",
      cost: 40,
      mrp: 42,
      image: require("./assets/images/apple.png"),
    },
    {
      category: FruitsVeg,
      name: "Mango",
      cost: 80,
      mrp: 90,
      image: require("./assets/images/apple.png"),
    },
    {
      category: FruitsVeg,
      name: "Potato",
      cost: 40,
      image: require("./assets/images/apple.png"),
      mrp: 50,
    },
    {
      category: FruitsVeg,
      name: "Onion",
      cost: 35,
      mrp: 38,
      image: require("./assets/images/apple.png"),
    },
  ]);

  const addToBasket = (product) => {
    let newBasket = [...basket];
    let itemInBasket = newBasket.find((item) => product.name === item.name);
    if (itemInBasket) {
      itemInBasket.quantity++;
      alert("Item added");
    } else {
      itemInBasket = {
        ...product,
        quantity: 1,
      };
      newBasket.push(itemInBasket);
    }
    setBasket(newBasket);
  };

  const [category, setCategory] = useState(Grains_Pulses);

  const mystyle = {
    zIndex: "1",
    left: "4rem",
    border: "1px solid #62a154",
    margin: ".6rem",
    height: "0.8rem",
    width: "0.8rem",
  };

  const divIn = {
    backgroundColor: "#62a154",
    borderTopLeftRadius: "50%",
    borderTopRightRadius: "50%",
    borderBottomLeftRadius: "50%",
    borderBottomRightRadius: "50%",
    marginLeft: "1px",
    marginTop: "2px",
    height: ".6rem",
    width: ".6rem",
  };

  const getProductsInCategory = () => {
    return products.filter((product) => product.category === category);
  };

  return (
    <>
      <h3 style={{ float: "left" }}>Shop by category</h3>
      <br />
      <br />
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value={Grains_Pulses}>{Grains_Pulses}</option>
        <option value={Bread_Bakery}>{Bread_Bakery}</option>
        <option value={Dairy_Jarred}>{Dairy_Jarred}</option>
        <option value={Snacks}>{Snacks}</option>
        <option value={Cleaners_Care}>{Cleaners_Care}</option>
        <option value={FruitsVeg}>{FruitsVeg}</option>
      </select>
      <br />
      <div className="products">
        {getProductsInCategory().map((product, idx) => (
          <div className="product" key={idx}>
            <img src={product.image} alt={product.name} />

            <div class="veg" style={mystyle}>
              <div style={divIn}></div>
            </div>

            <p style={{ float: "left" }}>{product.name}</p>
            <br />

            <h6
              style={{ position: "absolute", float: "left", marginLeft: "0" }}
            >
              MRP Rs.{product.mrp} Rs.{product.cost}{" "}
            </h6>

            <br />
            <br />
            <div
              style={{
                margin: "0",
                padding: "0",
                width: "100%",
                float: "left",
                position: "relative",
                minHeight: "1px",
              }}
            >
              <div
                style={{
                  width: "33.33%",
                  float: "left",
                  position: "relative",
                  minHeight: "1px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    display: "table",
                    borderCollapse: "separate",
                  }}
                >
                  <span
                    style={{
                      width: "33.33%",
                      borderRight: "0",
                      padding: "0 4px",
                      height: "auto",
                      fontSize: "12px",
                      color: "#999",
                      font: "12px/16px ProximaNovaA-Regular",
                      borderColor: "#e0e0e0",
                      borderTopRightRadius: "0",
                      borderBottomRightRadius: "0",
                      textAlign: "center",
                      display: "table-cell",
                      backgroundColor: "#eee",
                      border: "1px solid #ccc",
                      whiteSpace: "nowrap",
                      verticalAlign: "middle",
                      borderRadius: "4px",
                    }}
                  >
                    {" "}
                    Qty
                  </span>
                  <input
                    type="text"
                    style={{
                      borderTopLeftRadius: "0",
                      borderBottomLeftRadius: "0",
                      padding: "0",
                      textAlign: "center",
                      height: "22px",
                      zIndex: "0! important",
                      display: "table-cell",
                      position: "relative",
                      float: "left",
                      width: "100%",
                      marginBottom: "0",
                      backgroundColor: "#fff",
                      backgroundImage: "none",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      boxShadow: "inset 0 1px 1px rgba(0,0,0,.075)",
                      transition:
                        "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
                      fontSize: "14px",
                      lineHeight: "1.42857",
                      color: "gray",
                      outline: "none!important",
                      margin: "0",
                      borderCollapse: "separate",
                    }}
                  ></input>
                </div>
              </div>

              <div
                style={{
                  padding: "0",
                  width: "41.66667%",
                  float: "left",
                  position: "relative",
                  minHeight: "1px",
                }}
              >
                <button
                  style={{
                    width: "60%",
                    marginLeft: "20px",
                    borderRadius: "4px",
                    border: "1px solid #fee67c",
                    padding: "0",
                    touchAction: "manipulation",
                    overflow: "visible",
                    minHeight: "1px",
                    position: "relative",
                    whiteSpace: "nowrap",
                    userSelect: "None",
                    cursor: "pointer",
                    height: "22px",
                    marginBottom: "0",
                    textAlign: "center",
                    verticalAlign: "middle",
                    background: "linear-gradient(180deg,#fee67c 0,#f2cb76)",
                    color: "#414042",
                    textTransform: "uppercase",
                    font: "13px ProximaNovaA-Regular",
                    display: "inline-block",
                    lineHeight: "1.7",
                    float: "left",
                  }}
                  onClick={() => addToBasket(product)}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
