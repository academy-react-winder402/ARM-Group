import http from "../../Interceptor";

export const GetCourseById = async (Id) => {
  try {
    const response = await http.get("/Home/GetCourseDetails?CourseId=" + Id);

    return response;
  } catch (error) {
    console.log(error);
  }
};
export const ReserveAdd = async (Id) => {
  try {
    const response = await http.post("/CourseReserve/ReserveAdd", {
      courseId: Id,
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
