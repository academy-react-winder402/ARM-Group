import { useState } from "react";
import DefualtButton from "../Common/DefualtButton";
import { loginAPI } from "../../Core/Services/api/auth";
import { ErrorMessage, Field, Form, Formik } from "formik";
import RememberMe from "../Common/RememberMe";
import toast from "react-hot-toast";
import { SetItem } from "../../Core/Services/common/Storage.Services";
import PropagateLoader from "react-spinners/PropagateLoader";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

function MainForm() {
  const navigate = useNavigate();
  const [isLoad, setIsload] = useState(false);
  const validation = yup.object({
    phoneOrGmail: yup
      .string()
      .required("ایمیل یا شماره همراه خود را وارد کنید" + " * "),
    password: yup.string().required("رمز عبور الزامیست" + " * "),
  });

  const LogInUser = async (userObj) => {
    setIsload(true);
    const user = await loginAPI(userObj);
    setIsload(false);

    if (user.success) {
      toast.success("ورود با موفقیت انجام شد");
      SetItem("token", user.token);
      navigate("/");
    } else {
      toast.error("اطلاعات حساب کاربری یا رمز عبور نادست است");
    }
  };

  const onSubmit = (values) => {
    console.log(values);
    LogInUser(values);
  };

  return (
    <Formik
      initialValues={{ phoneOrGmail: "", password: "", rememberMe: true }}
      onSubmit={onSubmit}
      validationSchema={validation}
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
              name="phoneOrGmail"
              id="phoneOrGmail"
            />
            <ErrorMessage
              name="phoneOrGmail"
              component={"span"}
              className="Error"
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
              type="password"
              name="password"
              id="password"
            />
            <ErrorMessage
              name="password"
              component={"span"}
              className="Error"
            />
          </div>
        </div>

        <RememberMe name="rememberMe" id="rememberMe" />

        {isLoad ? (
          <DefualtButton
            Style={{
              background:
                "linear-gradient(to right bottom, #0DA39480, #40BE5D)",
              height: "40px",
              paddingBottom: "20px",
              fontSize: "16px",
              fontFamily: "IranSanse",
            }}
            innerHTML={<PropagateLoader color="white" />}
          />
        ) : (
          <DefualtButton sumbit innerHTML="ورود به حساب" />
        )}
      </Form>
    </Formik>
  );
}

export default MainForm;
