import React from "react";
import "./tastypizza.css";
export default function TastyPizzas({ results, handleOnClick }) {
  return (
    <div className="tasty-main">
      {results.map((item) => (
        <>
          {item.subItemData.subItems.map((type) => (
            <>
              <div className="itembox">
                <div>
                  <img src={type.image} alt={type.name} />
                </div>
                <h3 className="itemname">{type.name}</h3>
                <h4>
                  <span className="itemprice">
                    Rs-<b>{type.price}</b>
                  </span>
                </h4>
                <h4 className="itemdescription">{type.description}</h4>
                <button className="btnitem" onClick={() => handleOnClick(type)}>
                  Add to cart
                </button>
              </div>
            </>
          ))}
        </>
      ))}
    </div>
  );
}
