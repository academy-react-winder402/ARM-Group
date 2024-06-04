import http from "../../Interceptor";

export const AddCourseLike = async (id) => {
  try {
    const response = await http.post("/Course/AddCourseLike?CourseId=" + id);

    return response;
  } catch (error) {
    console.log(error);
  }
};
