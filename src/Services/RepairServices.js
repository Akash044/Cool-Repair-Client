import requestServices from "./httpServices";

class RepairServices {
  getServices(url) {
    return requestServices.get(url);
  }
  postServices(url, body) {
    return requestServices.post(url, body);
  }
  updateServices(url, body) {
    return requestServices.patch(url, body);
  }
  deleteServices(url) {
    return requestServices.delete(url);
  }
}

export default RepairServices = new RepairServices();
