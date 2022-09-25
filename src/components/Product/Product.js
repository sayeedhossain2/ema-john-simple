import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Product.css";

const Product = (props) => {
  //   console.log(props);
  //   akhane props er vitor thekke distructure kora hoice tay nicher line a r props.product avabe dea lagbe na , direct product dile e hobe abr chayle props er oykhane o avabe dite pari, same kajj { product, handleAddToCart }

  const { product, handleAddToCart } = props;
  const { img, name, price, seller, ratings } = product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Peice: ${price}</p>
        <p>
          <small>Seller: {seller}</small>
        </p>
        <p>
          <small>Ratings: {ratings} stars</small>
        </p>
      </div>

      {/* akhane btn er function er vitor dea akta argument pass korci ay handle funntion er parameter hishab a, r akhane j props.product ata hosce full akta obj. ata shop component theke props er vitor dea neaci.then akhane theke pathay desci product  */}

      {/* upor a props k distructure kora hoice tay akhabe r props.product dea lagbe na. */}

      <button onClick={() => handleAddToCart(product)} className="btn-cart">
        <p className="btn-text">Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
