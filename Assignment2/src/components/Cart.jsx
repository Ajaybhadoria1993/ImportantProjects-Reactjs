import React from "react";
import { Link } from "react-router-dom";
import "./cart.css";
export default function Cart({ cart, setCart, setCount, count }) {
  //use prop
  const onRemove = (item) => {
    //onRemove function for delete item from cart using filter method
    setCart(cart.filter((product) => product !== item));
    setCount(count - 1);
  };

  return (
    <article>
      {cart.map(
        (
          item //map all the item inside the cart
        ) => (
          <div className="cart-box">
            <div className="cart_img">
              <img src={item.image} alt="" />
            </div>
            <div>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.description}</p>
            </div>

            <div>
              <button onClick={() => onRemove(item)}>remove</button>
            </div>
          </div>
        )
      )}
      <button className="place-order-btn">
        <Link to="/">
          <span>Place order</span>
        </Link>
      </button>
    </article>
  );
}
