import http from "../Interceptor";

export const GetByPagination = async () => {
  try {
    const response = await http.get("/Sign/Login");

    return response;
  } catch (error) {
    console.log(error);
  }
};
