import http from "../../Interceptor";

export const GetCourseComments = async (Id) => {
  try {
    const response = await http.get("/Course/GetCourseCommnets/" + Id);

    return response;
  } catch (error) {
    console.log(error);
  }
};
