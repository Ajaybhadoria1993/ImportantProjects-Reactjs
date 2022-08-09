import React, { useState, useEffect } from "react";
import "./App.css";
import MainItem from "./components/MainItem";
import Navbar from "./components/Navbar";
import TastyPizza from "./components/TastyPizzas";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Burger from "./components/Burger";
import data from "./data.json";

const saveDateToLocalStorage = (cart) => {
  //use local storage for save the data of add cart
  localStorage.setItem("cart", JSON.stringify(cart));
};

function App() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [count, setCount] = useState(0);
  const handleOnClick = (item) => {
    //handleonclick function
    setCart([...cart, item]);
    setCount(count + 1);
  };

  useEffect(() => {
    saveDateToLocalStorage(cart);
  }, [cart]);

  useEffect(() => console.log(cart), [cart]);

  const { results } = data;

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar count={count} />
        <Routes>
          <Route path="/" element={<MainItem />} />
          <Route
            path="/tastypizza"
            element={
              <TastyPizza results={results} handleOnClick={handleOnClick} />
            }
          />
          <Route
            path="/burger"
            element={<Burger results={results} handleOnClick={handleOnClick} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                setCart={setCart}
                setCount={setCount}
                count={count}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
