import http from "../../Interceptor";

export const GetReplyComments = async (CourseId, Id) => {
  try {
    const response = await http.get(
      "/Course/GetCourseReplyCommnets/" + CourseId + "/" + Id
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};
