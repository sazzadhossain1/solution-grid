import React from "react";
import "./FourthSection.css";
import photoOne from "../../accets/FourthSectionPhoto/photoOne.png";
import photoOnee from "../../accets/FourthSectionPhoto/s.jpg";
import photoTwo from "../../accets/FourthSectionPhoto/photoTwo.gif";
import photoThree from "../../accets/FourthSectionPhoto/photoThree.gif";
import photoFour from "../../accets/FourthSectionPhoto/photoFour.gif";

const FourthSection = () => {
  return (
    <div className="fourth_section_grid_div">
      <div className="photoOne_div">
        <img className="fourth_section_photoOne" src={photoOne} alt="" />
      </div>
      <div className="fourth_section_text_parent_div">
        <h1 className="newsAndEvents">About Us</h1>
        <div className="fourth_section_flex_div">
          {/* <img className="fourth_section_flex_photo" src={photoTwo} alt="" /> */}
          <div>
            {/* <h4>View & Pick</h4> */}
            <p>
              We are a group of passionate professionals who always adopt
              result-oriented and innovative techniques to the core that help in
              enhancing your business through information technology.
            </p>
          </div>
        </div>
        <div className="fourth_section_flex_div">
          {/* <img className="fourth_section_flex_photo" src={photoThree} alt="" /> */}
          <div>
            {/* <h4>View & Pick</h4> */}
            <p>
              We are best known for quality Software Development, Mobile App
              Development, Website Design and Development, Graphics, Animation &
              Motion Graphics as well as Digital Marketing Services along with
              Search Engine Optimization.
            </p>
          </div>
        </div>
        {/* <div className="fourth_section_flex_div">
          <img className="fourth_section_flex_photo" src={photoFour} alt="" />
          <div>
            <h4>View & Pick</h4>
            <p>Simply pick your future house from our product catalogue.</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default FourthSection;
