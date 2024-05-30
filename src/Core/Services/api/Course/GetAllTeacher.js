import http from "../../Interceptor";

export const GetAllTeacher = async () => {
  try {
    const response = await http.get("/Home/GetTeachers");

    return response;
  } catch (error) {
    console.log(error);
  }
};
