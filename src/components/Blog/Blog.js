import React from "react";
import "./Blog.css";
import blogUi from "../../accets/blogPhoto/blogUi.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const Blog = () => {
  return (
    <div className="blog_parent_div">
      <h1>Blogs</h1>
      <div>
        <img className="blogUi_image" src={blogUi} alt="" />
        <div className="blog_text_div">
          <h1>next generation thinking</h1>

          <p>
            Web 2.0 and Web 3.0 refer to successive iterations of the web,
            compared with the original Web 1.0 of the 1990s and early 2000s. Web
            2.0 is the current version of the internet (a term often used
            interchangeably with the web) with which we are all familiar, while
            Web 3.0 represents its next phase Web refers to the World...
          </p>
          <Link>
            Read More <FontAwesomeIcon icon={faLongArrowAltRight} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
