import toast from "react-hot-toast";
import http from "../../Interceptor";

export const AddCourseLike = async (Id) => {
  try {
    const response = await http.post("/Course/AddCourseLike?CourseId=" + Id);

    toast.success(response.message);
    return response;
  } catch (error) {
    console.log(error);
  }
};
