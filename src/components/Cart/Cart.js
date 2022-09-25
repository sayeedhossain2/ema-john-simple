import React from "react";

const Cart = ({ cart }) => {
  const totalPrice = cart.reduce(
    (previousPrice, currentPrice) => previousPrice + currentPrice.price,
    0
  );

  return (
    <div>
      <h1>Order summery</h1>
      <h3>selected item: {cart.length}</h3>
      <h3>Total price: ${totalPrice}</h3>
      <h3>Total Shipping Charge: </h3>
      <h3>Tax: </h3>
      <h4>Grand Total: </h4>
    </div>
  );
};

export default Cart;
