import http from "../../Interceptor";

export const DeleteFavoriteCourse = async (id) => {
  try {
    let formData = new FormData();
    formData.append("CourseFavoriteId", id);

    const response = await http.delete("Course/DeleteCourseFavorite", formData);

    return response;
  } catch (error) {
    console.log(error);
  }
};
