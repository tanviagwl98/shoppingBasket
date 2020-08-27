import React, { useState } from 'react';
import './App.css';


const Bread_Bakery= 'Bread & Bakery';
const Grains_Pulses = 'Grains & Pulses';
const Dairy_Jarred = 'Dairy & Jarred';
const Snacks = 'Snacks';
const Cleaners_Care = 'Cleaners & Care';


export default function Products({ setCart, cart }) {
  const [products] = useState([
    {
      category: Grains_Pulses,
      name: 'Pulses',
      cost: ' 40/kg',
      image:require("./assests/images/pulses.jpeg"),
    },
    
    
      {
        category:Grains_Pulses,
        name: 'Flour',
        cost: ' 30/kg',
        image:require("./assests/images/flour.jpeg")
      },
      {
        category:Grains_Pulses,
        name: 'Peas',
        cost: ' 33/kg',
        image: require("./assests/images/peas.jpeg")
      },
      {
        category: Grains_Pulses,
        name: 'Rice',
        cost: ' 35/kg',
        image:require("./assests/images/rice.jpeg")
        
      },
    
      {
        category: Grains_Pulses,
        name: 'Spices',
        cost: ' 15/pkt',
        image:require("./assests/images/masale.jpeg")
        
      },
      
      {
        category:Grains_Pulses,
        name: 'Chole',
        cost: ' 68/kg',
        image:require("./assests/images/chole.jpeg")
        ,
      },

    {
        category: Bread_Bakery,
        name: 'Bread',
        cost: ' 48/pkt',
        image:require("./assests/images/bread.jpeg")
      },
    {
      category: Bread_Bakery,
      name: 'Bun',
      cost: ' 25/pkt',
      image:require("./assests/images/bun.jpeg")
    },
    {
      category: Bread_Bakery,
      name: 'Bakery Biscuit',
      cost: ' 40/pkt',
      image:require("./assests/images/biscuit.jpeg")
    },
    {
      category: Bread_Bakery,
      name: 'Cookies',
      cost: ' 35/pkt',
      image:require("./assests/images/cookie.jpeg")
    },
    {
        category: Grains_Pulses,
        name: 'Coffee',
        cost: ' 33/pack',
        image:require("./assests/images/coffee.jpeg")
      },
      {
        category: Grains_Pulses,
        name: 'Tea',
        cost: ' 25/pack',
        image:require("./assests/images/tea.jpeg")
      },
      
      {
        category: Dairy_Jarred,
        name: 'Milk',
        cost: ' 22/pkt',
        image:require("./assests/images/milkk.jpeg")
      },
      {
        category: Dairy_Jarred,
        name: 'Cheeses',
        cost: ' 99/pkt',
        image:require("./assests/images/cheeze.jpeg"),
       
      },
      {
        category: Dairy_Jarred,
        name: 'Butter',
        cost: ' 48/pkt',
        image:require("./assests/images/butter.jpeg"),
       
      },
      {
        category: Dairy_Jarred,
        name: 'Curd',
        cost: ' 21/cup',
        image:require("./assests/images/curd.jpeg")
      },
      {
        category:Dairy_Jarred,
        name: 'Mayonies',
        cost: ' 28/pkt',
        image:require("./assests/images/meonies.jpeg")
      },
      {
        category:Dairy_Jarred,
        name: 'Sauces',
        cost: ' 79/jar',
        image:require("./assests/images/sause.jpeg")
      },
      {
        category:Dairy_Jarred,
        name: 'Peanut Butter',
        cost: ' 98/jar',
        image:require("./assests/images/penut-butter.jpeg")
      },
      {
        category:Dairy_Jarred,
        name: 'Jam',
        cost: ' 45/jar',
        image:require("./assests/images/jam.jpeg")
      },
      {
        category:Dairy_Jarred,
        name: 'Vinegar',
        cost: ' 48/bottle',
        image:require("./assests/images/vineger.jpeg")
      },
      {
        category:Dairy_Jarred,
        name: 'Soya Sauce',
        cost: ' 50/bottle',
        image:require("./assests/images/soya_sauce.jpeg")
      },
      {
        category:Dairy_Jarred,
        name: 'Chilli Sauce',
        cost: ' 56/bottle',
        image:require("./assests/images/chilli_sause.jpeg")
      },
      {
        category: Snacks,
        name: 'Wafers',
        cost: ' 10/piece',
        image:require("./assests/images/wafer.jpeg")
      },
      {
        category:Snacks,
        name: 'Biscuits',
        cost: ' 20/pack',
        image:require("./assests/images/biscuits.jpeg")
      },
      {
        category:Snacks,
        name: 'Cold Drinks',
        cost: ' 100/ltr',
        image:require("./assests/images/colddrinks.jpeg")
      },
      {
        category:Snacks,
        name: 'Juices',
        cost: ' 40/tetrapack',
        image:require("./assests/images/juices.jpeg")
      },
      
      {
        category:Snacks,
        name: 'Masala_Kaju',
        cost: ' 45/pkt',
        image:require("./assests/images/kaju.jpeg")
      },
      
      {
        category:Cleaners_Care,
        name: 'Masks',
        cost: ' 14/piece',
        image:require("./assests/images/masks.jpeg")
      },
      {
        category:Cleaners_Care,
        name: 'Dettol Handwash',
        cost: ' 48/pack',
        image:require("./assests/images/detol.jpeg")
      },
      
      
      {
        category:Cleaners_Care,
        name: 'Surf & Bars',
        cost: ' 38/piece',
        image:require("./assests/images/surf.jpeg")
      },
      {
        category:Cleaners_Care,
        name: 'Hand Wash',
        cost: ' 30/bottle',
        image:require("./assests/images/senitizer.jpeg")
      },
      
     
      {
        category:Cleaners_Care,
        name: 'Sanitizers',
        cost: ' 45',
        image:require("./assests/images/sanitize.jpeg")
      },
      {
        category:Cleaners_Care,
        name: 'Cream',
        cost: ' 98',
        image:require("./assests/images/cream.jpeg")
      },
      {
        category:Cleaners_Care,
        name: 'Shampoos',
        cost: ' 105/bottle',
        image:require("./assests/images/shampoo.jpeg")
      },
      {
        category:Cleaners_Care,
        name: 'Soap',
        cost: ' 35',
        image:require("./assests/images/soap.jpeg")
      },
      
  ]);

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  const [category, setCategory] = useState(Grains_Pulses);

  const getProductsInCategory = () => {
    return products.filter(
      (product) => product.category === category
    );
  };

  return (
    <>
      <h1>Products</h1>
      <h3>Select a category</h3>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value={Grains_Pulses}>{Grains_Pulses}</option>
        <option value={Bread_Bakery}>{Bread_Bakery}</option>
        <option value={Dairy_Jarred}>{Dairy_Jarred}</option>
        <option value={Snacks}>{Snacks}</option>
        <option value={Cleaners_Care}>{Cleaners_Care}</option>
        
      </select>
      <div className="products">
        {getProductsInCategory().map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>Rs.{product.cost}</h4>
            <img  src={product.image} alt={product.name} />
            <div>
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
