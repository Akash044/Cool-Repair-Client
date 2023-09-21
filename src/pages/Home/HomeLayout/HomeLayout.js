import "./HomeLayout.css";
import React from "react";
import Footer from "../Footer/Footer";
import AllReviews from "../Reviews/AllReviews/AllReviews";
import AllServices from "../Services/AllServices/AllServices";
import AskQuestion from "../AskQuestion/AskQuestion";
import Blog from "../Blog/Blog";
import Banner from "../Banner/Banner";

const Home = () => {
  document.title = "Home";
  return (
    <div>
      <div className="container">
        <Banner></Banner>
      </div>
      <div className=" contents">
        <div className="service-header mb-4 mx-auto">
          <h3>The Services we are provided</h3>
        </div>
        <div className="container">
          <AllServices name="khaled"></AllServices>
        </div>
      </div>
      <div className=" contents">
        <div className="review-header mb-4 mx-auto">
          <h3 className="mx-auto">Reviews</h3>
        </div>
        <div className="container">
          <AllReviews></AllReviews>
        </div>
      </div>
      <div className="contents">
        <div className="blog-header mb-4 mx-auto">
          <h3>Blogs</h3>
        </div>
        <div className="container">
          <Blog></Blog>
        </div>
      </div>
      <div className="contents">
        <div className="ask-question-header mb-4 mx-auto">
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
