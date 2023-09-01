import { blogData } from "../../../assets/blogData";
import "./Blog.css";
import React from "react";

const Blog = () => {
  return (
    <div className="container blog-section">
      {blogData.map((data, i) => (
        <div key={i}>
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">{data.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{data.subtitle}</h6>
              <p class="card-text">{data.content}</p>

              <a href="#" class="card-link">
                go details
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
