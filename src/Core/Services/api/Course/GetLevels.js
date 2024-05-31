import http from "../../Interceptor";

export const GetLevels = async () => {
  try {
    const response = await http.get("/CourseLevel/GetAllCourseLevel");

    return response;
  } catch (error) {
    console.log(error);
  }
};
