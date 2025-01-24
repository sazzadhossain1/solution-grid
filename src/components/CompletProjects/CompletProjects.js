import React from "react";
import "./CompletProjects.css";
import projectsOne from "../../accets/CompletProjectsPhoto/projectOne.png";

const CompletProjects = () => {
  return (
    <div>
      <h1 className="completeProjects_title">
        We Completed 500+ Projects Successfully & Counting
      </h1>
      <div className="completProjects_grid_div">
        <div className="completeProjects_cart">
          <h1>400+</h1>
          <p>Global Customers</p>
        </div>
        <div className="completeProjects_cart">
          <h1>500+</h1>
          <p>Completed Projects</p>
        </div>
        <div className="completeProjects_cart">
          <h1>15+</h1>
          <p>Expert Technicians</p>
        </div>
      </div>

      <div className="some_work_div">
        <h1>Some Work Samples</h1>
        <div>
          <img className="projectsOne" src={projectsOne} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CompletProjects;
