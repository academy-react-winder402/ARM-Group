import http from "../../Interceptor";

export const loginAPI = async (user) => {
  try {
    const response = await http.post("/Sign/Login", user);

    return response;
  } catch (error) {
    console.log(error);
  }
};
