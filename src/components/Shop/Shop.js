import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //   akhaner ay handle function ta ami product component er btn a onclick hidhab a desci and akhane j product nam a parameter neaci ata holo argument hishab a pathayce and full obnject k, tay dot dea name  id all access kkorte parci.
  //   and ay handlar ta akhane e nite hobe kno na ami j khan a product set korbo seta ay complonent ey, so react hosce unidirectional, upor theke niche asbe kintu niche theke upor jabe na, ay onclick er function ta akhane.
  //   and akhane  18 no line a object asce and 19 no line a array of object hoyea jasce .
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
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

      <div className="cart-cintainer">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
