import http from "../../Interceptor";

export const GetUserInfo = async () => {
  try {
    const response = await http.get("/SharePanel/GetProfileInfo");

    return response;
  } catch (error) {
    console.log(error);
  }
};
export const GetMyCoursesReserve = async () => {
  try {
    const response = await http.get("SharePanel/GetMyCoursesReserve");

    return response;
  } catch (error) {
    console.log(error);
  }
};
