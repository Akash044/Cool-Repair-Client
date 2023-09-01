import requestServices from "./httpServices";

class RepairServices {
  getServices() {
    return requestServices.get("/services");
  }
  postServices(body) {
    return requestServices.post("/services", body);
  }
  updateServices(body) {
    return requestServices.patch("/services", body);
  }
  deleteServices(id) {
    return requestServices.delete(`/services/${id}`);
  }
}

export default RepairServices = new RepairServices();
