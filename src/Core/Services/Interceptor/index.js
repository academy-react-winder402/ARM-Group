import axios from "axios";
import { GetItem, RemoveItem } from "../common/Storage.Services";
import toast from "react-hot-toast";

const baseURL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({ baseURL: baseURL });

const onSuccess = (response) => {
  return response.data;
};

const onError = (error) => {
  console.log(error);

  if (error.response.status === 401) {
    RemoveItem("token");

    window.location.pathname("/Login");
    toast.error("لطفا دوباره وارد شوید");
  }

  return Promise.reject(error);
};

instance.interceptors.response.use(onSuccess, onError);

instance.interceptors.request.use((opt) => {
  const token = GetItem("token");

  /* opt.headers["MessageTest"] = "Hello World!"; */
  if (token) opt.headers.Authorization = "Bearer " + token;
  return opt;
});

export default instance;
