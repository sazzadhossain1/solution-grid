import React from "react";
import "./SecondSectionCart.css";

const SecondSectionCart = ({ cart }) => {
  const { title, icon, text, color } = cart;
  console.log(title);
  return (
    <div className="secondSectionCart_main_parent_div">
      <div className="secondSectionCart_parent_div">
        <div>
          {/* <img className="secondSectionCart_image" src={image} alt="" /> */}
          <div className="icon_div">
            <p style={{ color: color }} className="icon">
              {icon}
            </p>
          </div>
          <h2 className="">{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default SecondSectionCart;
