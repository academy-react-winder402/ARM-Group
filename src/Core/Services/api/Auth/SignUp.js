import http from "../../Interceptor";

const SendVerifyMessage = async (value) => {
  try {
    const response = await http.post("/Sign/SendVerifyMessage", value);

    return response;
  } catch (error) {
    console.log(error);
  }
};

const VerifyMessage = async (value) => {
  try {
    const response = await http.post("/Sign/VerifyMessage", value);

    return response;
  } catch (error) {
    console.log(error);
  }
};

const Register = async (value) => {
  try {
    const response = await http.post("/Sign/Register", value);

    return response;
  } catch (error) {
    console.log(error);
  }
};

export { SendVerifyMessage, VerifyMessage, Register };
