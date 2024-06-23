import http from "../../Interceptor";

export const UpdateProfileInfo = async (formdata) => {
  try {
    const response = await http.put("/SharePanel/UpdateProfileInfo", formdata);

    return response;
  } catch (error) {
    console.log(error);
  }
};
