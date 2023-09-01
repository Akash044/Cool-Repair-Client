import axios from "axios";

const instance = axios.create({
  baseURL: "https://cool-repair.onrender.com",
  timeout: 15000,
});

const requestServices = {
  get: (url) => instance.get(url).then((response) => response.data),
  post: (url, body) => {
    instance.post(url, body).then((response) => response.data);
  },
  update: (url, body) => {
    instance.patch(url, body).then((response) => response.data);
  },
  delete: (url) => {
    instance.delete(url).then((response) => response.data);
  },
};

export default requestServices;
