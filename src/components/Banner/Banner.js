import React from "react";
import "./Banner.css";
import video from "../../accets/BannerVodeo/bannerVideo.mp4";

const Banner = () => {
  return (
    <div className="banner_parent_div">
      <div className="overlay"></div>
      <video className="video" src={video} autoPlay loop muted />
      <div className="banner_container">
        <h2>
          Thinking of getting a website, software or Mobile App for your
          business?
        </h2>

        <h2>Think no other but Solutiongrid The best that there is!</h2>
      </div>
    </div>
  );
};

export default Banner;
