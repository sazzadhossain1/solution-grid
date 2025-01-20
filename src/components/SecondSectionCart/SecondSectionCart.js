import React from "react";
import "./SecondSectionCart.css";

const SecondSectionCart = ({ cart }) => {
  const { title, icon, text } = cart;
  console.log(title);
  return (
    <div className="secondSectionCart_main_parent_div">
      <div className="secondSectionCart_parent_div">
        <div>
          {/* <img className="secondSectionCart_image" src={image} alt="" /> */}
          <p className="icon">{icon}</p>
          <h2 className="">{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default SecondSectionCart;
