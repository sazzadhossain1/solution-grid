import React from "react";
import "./FirstSection.css";
import First from "../First/First";

import photoOne from "../../accets/FirstSectionPhoto/photoOne.png";
import photoTwo from "../../accets/FirstSectionPhoto/photoTwo.png";
import photoThree from "../../accets/FirstSectionPhoto/photoThree.png";
import photoFour from "../../accets/FirstSectionPhoto/photoFour.png";
import photoFive from "../../accets/FirstSectionPhoto/photoFive.png";
import photoSix from "../../accets/FirstSectionPhoto/photoSix.png";
import photoSaven from "../../accets/FirstSectionPhoto/photoSaven.png";
import photoEight from "../../accets/FirstSectionPhoto/photoEight.png";
import photoNine from "../../accets/FirstSectionPhoto/photoNine.png";
import photoTen from "../../accets/FirstSectionPhoto/photoTen.png";
import photoElaven from "../../accets/FirstSectionPhoto/photoElaven.png";
import { text } from "@fortawesome/fontawesome-svg-core";

const FirstSection = () => {
  const products = [
    {
      id: 1,
      name: "Software system & Development",
      image: photoOne,
      text: "Our team of software expert will provide you custom made software for your business operation.",
    },
    {
      id: 2,
      name: "App Development",
      image: photoTwo,
      text: "Make your brand or business and products more popular among mobile users and engage them with your business.",
    },
    {
      id: 3,
      name: "Website Design & Development",
      image: photoThree,
      text: "Our team of website designer and developer will deliver top notch website for your business to make you stand out from the crowd.",
    },
    {
      id: 4,
      name: "Domain & Hosting",
      image: photoFour,
      text: "For reliable prompt service, we are unparalleled in getting the domain that you want and in getting the most reliable hosting for your brand.",
    },
    {
      id: 5,
      name: "BPO Support",
      image: photoFive,
      text: "Our experienced team takes the hassle off of your hand and gives you the best BPO support so you can focus on your core business.",
    },
    {
      id: 6,
      name: "Online Marketing",
      image: photoSix,
      text: "Achieve your marketing, communication and branding goals among the Social media network through our Social media marketing.",
    },
    {
      id: 7,
      name: "Content Development",
      image: photoSaven,
      text: "Content is everything. Content drives your business. Leave it up to our expert hands for content development.",
    },
    {
      id: 8,
      name: "Graphic Design",
      image: photoEight,
      text: "For striking designs be it for your website or for print or for 3D rendering, we have the talented professionals with an inexpensive rate.",
    },
    {
      id: 9,
      name: "UI/UX Design",
      image: photoNine,
      text: "We aims to provide positive experiences that keep users loyal to the product or brand that allows you to define customer journeys on your website that are most conducive to business success.",
    },
    {
      id: 10,
      name: "Social Media Management",
      image: photoTen,
      text: "Our Team allows you to have a smooth and a working plan as to how you are going to post, respond to followers and fans and take the information that they interactions provide so that you can use it to make your business better",
    },
    {
      id: 11,
      name: "Market Research",
      image: photoElaven,
      text: "Market research provides critical information about your market and your business landscape. We can tell you how your company is perceived by the target customers and clients you want to reach.",
    },
    {
      id: 12,
      name: "White Label Solution",
      image: photoElaven,
      text: "Build your own brand. We do provide white label solution so you can build your own brand and have your way with your customers. We stand behind to support your business with our expert team.",
    },
  ];
  return (
    <div className="firstSection_parent_div">
      <h1>Our Services</h1>
      <div className="firstSection_grid_div">
        {products.map((product) => (
          <First key={product.id} product={product}></First>
        ))}
      </div>
    </div>
  );
};

export default FirstSection;
