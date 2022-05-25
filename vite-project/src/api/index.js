import axios from 'axios';

const api = axios.create({});
api.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    return config;
  },
  function (error) {
    alert(`ERRROR: ${error}`);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (config) {
    // Do something before request is sent

    return config;
  },
  function (error) {
    alert(`ERRROR: ${error}`);
    return Promise.reject(error);
  }
);
export { api };
