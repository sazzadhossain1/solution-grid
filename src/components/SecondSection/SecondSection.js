import React from "react";
import "./SecondSection.css";

import SecondSectionCart from "../SecondSectionCart/SecondSectionCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faComments,
  faCubes,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
const SecondSection = () => {
  const cartInfo = [
    {
      id: 1,
      title: "Free Consultation",
      icon: <FontAwesomeIcon icon={faComments} />,
      text: "We sit down to find scope of the project, identify key areas and make suggestions",
    },
    {
      id: 2,
      title: "Plan & Budget",
      icon: <FontAwesomeIcon icon={faClipboardList} />,
      text: "Concrete Features planning or System Analysis & Design with timeframe and budget",
    },
    {
      id: 3,
      title: "Development & Testing",
      icon: <FontAwesomeIcon icon={faCubes} />,
      text: "Development as planned and complete testing of the developed product",
    },
    {
      id: 4,
      title: "Delivery & Feedback",
      icon: <FontAwesomeIcon icon={faStar} />,
      text: "Deliver the project and receive feedback from clients. Make changes or further correct if there is any request from clients",
    },
  ];
  return (
    <div className="secondSection_parent_div">
      <h1>How Does It Work</h1>
      <div className="secondSection_container_div">
        <div className="secondSection_grid_div">
          {cartInfo.map((cart) => (
            <SecondSectionCart key={cart.id} cart={cart}></SecondSectionCart>
          ))}
        </div>
        {/* <div className="second_section_more_btn_div">
          <Link className="second_section_more_btn">
            More <span>→</span>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default SecondSection;
