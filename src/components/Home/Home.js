import React from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import FirstSection from "../FirstSection/FirstSection";
import SecondSection from "../SecondSection/SecondSection";
import ThirdSection from "../ThirdSection/ThirdSection";
import FourthSection from "../FourthSection/FourthSection";
import FifthSection from "../FifthSection/FifthSection";
import SixSection from "../SixSection/SixSection";
import CompletProjects from "../CompletProjects/CompletProjects";
import Blog from "../Blog/Blog";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
      {/* <ThirdSection></ThirdSection> */}
      {/* <FourthSection></FourthSection> */}
      {/* <CompletProjects></CompletProjects> */}
      {/* <Blog></Blog> */}
      {/* <FifthSection></FifthSection> */}
      {/* <SixSection></SixSection> */}
    </div>
  );
};

export default Home;
