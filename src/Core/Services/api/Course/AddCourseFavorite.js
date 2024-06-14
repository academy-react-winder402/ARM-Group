import http from "../../Interceptor";

export const AddCourseFavorite = async (id) => {
  try {
    const response = await http.post("/Course/AddCourseFavorite", id);

    return response;
  } catch (error) {
    console.log(error);
  }
};
