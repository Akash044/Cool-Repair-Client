import requestServices from "./httpServices";

class ReviewServices {
  getReviews() {
    return requestServices.get("/reviews");
  }
  postReview(body) {
    return requestServices.post("/reviews", body);
  }
  updateReview(body) {
    return requestServices.patch("/reviews", body);
  }
  deleteReview(id) {
    return requestServices.delete(`/reviews/${id}`);
  }
}

export default ReviewServices = new ReviewServices();
