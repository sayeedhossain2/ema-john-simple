// import { faHollyBerry } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { addToDb, getStoredCard } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // console.log("product load before fetch");
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // akhane getStoredCard dea bujhay j fakedb er vitor a jode kono obj pay tayle akhane loop calay tar single id gulo nea faHollyBerry.
  // useEffect er dependency hishab a  products k deaci, kenona dependency jode na dei tayle code ta akbar e cholbe. and  ata jahatu asyncronus tay data load hobar agey ay code run hosce and data pasce na, atay dependency deaci jno abr code run hoy tayle 2nd time data ta pabe(joto bar data change hobe totobar run hobe)
  useEffect(() => {
    // console.log("local storage first line", products);
    const storedCart = getStoredCard();
    const saveCart = [];
    // akhane 2 no line a id match korle full obj ta dibe then 3 line a condition a bolce jode thake (akhane ache dekhe e match korce)tayle quantity er vitor a id er value ta dao. then next line a object er vitor quantity na a j property ache otar value hishab a set kore desce ay quantity(ata hose oy id er value(1,2,3(quantity))) then new array er vitor push kokra hosce
    for (const id in storedCart) {
      const addProducts = products.find((product) => product.id === id);
      // console.log(addProducts);
      if (addProducts) {
        const quantity = storedCart[id];
        addProducts.quantity = quantity;
        saveCart.push(addProducts);
      }
    }
    setCart(saveCart);
    // console.log(cart);
    // console.log("local storage finidhed");
  }, [products]);

  //   akhaner ay handle function ta ami product component er btn a onclick hidhab a desci and akhane j product nam a parameter neaci ata holo argument hishab a pathayce and full obnject k, tay dot dea name  id all access kkorte parci.
  //   and ay handlar ta akhane e nite hobe kno na ami j khan a product set korbo seta ay complonent ey, so react hosce unidirectional, upor theke niche asbe kintu niche theke upor jabe na, ay onclick er function ta akhane.
  //   and akhane  18 no line a object asce and 19 no line a array of object hoyea jasce .
  /* ata aghe amn clo, akn  modify korci nicher ta
   const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  }; */

  // console.log(cart);
  const handleAddToCart = (selectedProduct) => {
    console.log(selectedProduct);
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  // const totalPrice = cart.reduce(
  //   (previousPrice, currentPrice) => previousPrice + currentPrice.price,
  //   0
  // );

  // akhane avabe kora hoice j, akta state declar kora hoice ,then aray er vitor j man gula ache ogula copy kore r akta array banano hoice then or shote product add krci(product koncu ami jeta te click korbo oyta) then ota abr setcart a set korci.

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            handleAddToCart={handleAddToCart}
            product={product}
          ></Product>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;

/*  useEffect(() => {
    const storedCart = getStoredCard();
    // console.log(storedCart); {124e13b9-2d54-4b2f-a74d-a77b362d6ead: 1, 13cbc7ed-a61b-4883-9d42-82d7d8642b86: 2}
    const arr = [];
    for (const id in storedCart) {
      // console.log(id);124e13b9-2d54-4b2f-a74d-a77b362d6ead
      const newcart = products.find((product) => product.id === id);
      // console.log(newcart);{id: '124e13b9-2d54-4b2f-a74d-a77b362d6ead', category: "Men's Sneaker", name: 'ULTRABOOST 22 SHOES', seller: 'Addidas', price: 420, …}
      if (newcart) {
        const quantity = storedCart[id];
        newcart.quantity = quantity;
        arr.push(newcart);
        // console.log(arr);(2) [{…}, {…}]
      }
      console.log(newcart);
    }
  }, [products]); */
