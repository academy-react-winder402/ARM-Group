import http from "../../Interceptor";

export const GetCourseType = async () => {
  try {
    const response = await http.get("/CourseType/GetCourseTypes");

    return response;
  } catch (error) {
    console.log(error);
  }
};
