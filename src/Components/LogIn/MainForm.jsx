import { useEffect, useState } from "react";
import DefualtButton from "../Common/DefualtButton";
import { PhoneValidation } from "../../Core/Validations/SingUp.validation";
import {
  EmailValidation,
  PasswordValidation,
} from "../../Core/Validations/login.validation";
import { loginAPI } from "../../Core/Services/api/auth";
import { ErrorMessage, Field, Form, Formik } from "formik";
import RememberMe from "../Common/RememberMe";
import toast from "react-hot-toast";

function MainForm() {
  const LogInUser = async () => {
    const userObj = {
      phoneOrGmail: "3535bahr2089@gmail.com",
      password: "1234",
      rememberMe: true,
    };

    const user = await loginAPI(userObj);

    console.log(user);
  };
  const onSubmit = () => {
    console.log("submit");
  };

  useEffect(() => {
    //LogInUser();
  }, []);

  return (
    <Formik
      initialValues={{ Gmail: "", Password: "", RememberMe: Boolean }}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="mt-[55px] w-[100%] m-auto">
          <h3
            dir="rtl"
            className="text-[#727272] dark:text-Dark_TextColor_1 text[17px]  indent-[15px]  mb-[10px]"
          >
            حساب
          </h3>
          <div className="InputHolder overflow-visible bg-[url('./Image/LogIn/profileLogIn.svg')] dark:bg-[url('./Image/LogIn/profileLogIn-Dark.svg')] bg-no-repeat bg-[10px_8px] border w-[100%]">
            <Field
              placeholder="ایمیل یا شماره تلفن خود را وارد کنید"
              dir="rtl"
              type="text"
              name="Gmail"
              id="Gmail"
            />
            <ErrorMessage
              name="Gmail"
              component={"span"}
              className="ShowError text-[10px] text-red-700 absolute mr-[100px] mt-[-35px]"
            />
          </div>
        </div>

        <div className="mt-[25px]  w-[100%] m-auto mb-[50px]">
          <h3
            dir="rtl"
            className="text-[#727272] dark:text-Dark_TextColor_1 text[17px]  indent-[15px] mb-[10px]"
          >
            رمز عبور
          </h3>

          <div className="InputHolder overflow-visible bg-[url('/Image/LogIn/lock.svg')] dark:bg-[url('/Image/LogIn/lock-Dark.svg')] bg-no-repeat bg-[10px_7px]  w-[100%]">
            <Field
              placeholder="رمز عبور خود را وارد کنید"
              dir="rtl"
              type="text"
              name="Password"
              id="Password"
            />
            <ErrorMessage
              name="Password"
              component={"span"}
              className="ShowError text-[10px] text-red-700 absolute mr-[100px] mt-[-35px]"
            />
          </div>
        </div>

        <RememberMe />

        <DefualtButton sumbit innerHTML="ورود به حساب" />
      </Form>
    </Formik>
  );
}

export default MainForm;
