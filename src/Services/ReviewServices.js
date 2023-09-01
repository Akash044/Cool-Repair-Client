import requestServices from "./httpServices";

class ReviewServices {
  getReviews(url) {
    return requestServices.get(url);
  }
  postReview(url, body) {
    return requestServices.post(url, body);
  }
  updateReview(url, body) {
    return requestServices.patch(url, body);
  }
  deleteReview(url) {
    return requestServices.delete(url);
  }
}

export default ReviewServices = new ReviewServices();
