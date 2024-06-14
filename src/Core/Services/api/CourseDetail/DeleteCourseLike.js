import toast from "react-hot-toast";
import http from "../../Interceptor";

export const DeleteCourseLike = async (Id) => {
  try {
    const response = await http.post(
      "/Course/AddCourseDissLike?CourseId=" + Id
    );
    toast.success(response.message);
    return response;
  } catch (error) {
    console.log(error);
  }
};
