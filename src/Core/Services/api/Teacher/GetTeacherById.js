import http from "../../Interceptor";

export const GetTeacherById = async (Id) => {
  try {
    const response = await http.get("/Home/GetTeacherDetails?TeacherId=" + Id);

    return response;
  } catch (error) {
    console.log(error);
  }
};
