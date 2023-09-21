import { blogData } from "../../../assets/blogData";
import "./Blog.css";
import React from "react";

const Blog = () => {
  return (
    <div className="container blog-section">
      {blogData.map((data, i) => (
        <div key={i}>
          <div
            className="card blog-card outline-none shadow"
            style={{ width: "18rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">{data.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{data.subtitle}</h6>
              <p className="card-text">{data.content}</p>

              <a href="#" className="card-link">
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
