import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({ baseURL: baseURL });

const onSuccess = (response) => {
  return response.data;
};

const onError = (error) => {
  console.log(error);

  return Promise.reject(error);
};

instance.interceptors.response.use(onSuccess, onError);

instance.interceptors.request.use((opt) => {
  opt.headers["MessageTest"] = "Hello World!";
  return opt;
});

export default instance;
