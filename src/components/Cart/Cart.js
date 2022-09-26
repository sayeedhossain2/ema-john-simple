import React from "react";
import "./Cart.css";
// direct cart ta k props er jaigai neaci distructure er moto kore
const Cart = ({ cart }) => {
  //   console.log(cart);
  //   const totalPrice = cart.reduce(
  //     (previousPrice, currentPrice) => previousPrice + currentPrice.price,
  //     0
  //   );

  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));

  const grandTotal = total + shipping + tax;

  return (
    <div className="cart">
      <h3>Order summery</h3>
      <p>selected item: {quantity}</p>
      <p>Total price: ${total}</p>
      <p>Total Shipping Charge: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <h4>
        Grand Total:
        <span className="price-span">${grandTotal.toFixed(2)}</span>
      </h4>
    </div>
  );
};

export default Cart;
