import http from "../../Interceptor";

export const GetTechnologies = async () => {
  try {
    const response = await http.get("/Home/GetTechnologies");

    return response;
  } catch (error) {
    console.log(error);
  }
};
