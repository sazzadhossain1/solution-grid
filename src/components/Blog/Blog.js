import React from "react";
import "./Blog.css";
import blogUi from "../../accets/blogPhoto/blogUi.png";

const Blog = () => {
  return (
    <div className="blog_parent_div">
      <h1>Blogs</h1>
      <div>
        <img className="blogUi_image" src={blogUi} alt="" />
      </div>
    </div>
  );
};

export default Blog;
