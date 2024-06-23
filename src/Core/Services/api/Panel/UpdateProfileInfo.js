import http from "../../Interceptor";

export const UpdateProfileInfo = async (formdata) => {
  try {
    const response = await http.put("/SharePanel/UpdateProfileInfo", formdata);

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const ChangePassword = async (Pass, NewPass) => {
  try {
    const response = await http.post("/SharePanel/ChangePassword", {
      oldPassword: Pass,
      newPassword: NewPass,
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
