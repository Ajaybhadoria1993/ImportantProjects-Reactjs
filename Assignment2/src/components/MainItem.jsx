import React from "react";
import "./mainitem.css";
import { Link } from "react-router-dom";
export default function MainItem() {
  return (
    //main homepage
    <div className="mainImageOfMainItem">
      <div className="mainitem">
        <Link to="/tastypizza">
          {" "}
          <img
            src="pizza-mainItem.jpg"
            alt="pizza"
            style={{ width: "150px" }}
          />
        </Link>
        <div>
          <b>pizza</b>
        </div>
      </div>
      <div className="secondMainItem">
        <Link to="/burger">
          {" "}
          <img src="burgerMain2.jpg" alt="burger" style={{ width: "150px" }} />
        </Link>
        <div>
          <b>burger</b>
        </div>
      </div>
    </div>
  );
}
