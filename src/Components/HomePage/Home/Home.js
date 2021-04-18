import "./Home.css";
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AllReviews from "../Reviews/AllReviews/AllReviews";
import AllServices from "../Services/AllServices/AllServices";
import AskQuestion from "../AskQuestion/AskQuestion";
import Blog from "../Blog/Blog";

const Home = () => {
  document.title = "Home"
  return (
    <div>
      <div className="container">
        <Header></Header>
      </div>
      <div className="mt-4">
        <div className="service-header">
          <h3>The Services we are provided</h3>
        </div>
        <div className="container">
          <AllServices></AllServices>
        </div>
      </div>
      <div className="mt-5">
        <div className="review-header mb-2">
          <h3>Reviews</h3>
        </div>
        <div className="container">
          <AllReviews></AllReviews>
        </div>
      </div>
      <div className="mt-5">
        <div className="blog-header mb-3">
          <h3>Blogs</h3>
        </div>
        <div className="container">
          <Blog></Blog>
        </div>
      </div>
      <div className="mt-4">
        <div className="ask-question-header mb-2">
          <h3>Ask your questions</h3>
        </div>
        <div className="container">
          <AskQuestion></AskQuestion>
        </div>
      </div>
      <div className="mt-4">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
