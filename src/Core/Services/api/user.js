import http from "../Interceptor";

export const loginAPI = async () => {
  try {
    const response = await http.get("/Sign/Login");

    return response;
  } catch (error) {
    console.log(error);
  }
};
