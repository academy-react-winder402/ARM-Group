import { useState } from "react";
import DefualtButton from "../../Common/DefualtButton";
import { ErrorMessage, Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import PropagateLoader from "react-spinners/PropagateLoader";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

function MainForm() {
  const navigate = useNavigate();
  const [isLoad, setIsload] = useState(false);
  const validation = yup.object({
    gmail: yup.string().required("ایمیل خود را وارد کنید" + " * "),
    password: yup.string().required("رمز عبور الزامیست" + " * "),
  });

  const LogInUser = async (userObj) => {
    setIsload(true);
    const user = await loginAPI(userObj);
    setIsload(false);

    if (user.success === true) {
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
      initialValues={{ gmail: "", password: "" }}
      onSubmit={onSubmit}
      validationSchema={validation}
    >
      <Form>
        <div className="mt-[55px] w-[100%] m-auto">
          <h3
            dir="rtl"
            className="text-[#727272] dark:text-Dark_TextColor_1 text[17px]  indent-[15px]  mb-[10px]"
          >
            ایمیل
          </h3>
          <div className="InputHolder overflow-visible bg-[url('./Image/LogIn/profileLogIn.svg')] dark:bg-[url('./Image/LogIn/profileLogIn-Dark.svg')] bg-no-repeat bg-[10px_8px] border w-[100%]">
            <Field
              placeholder="ایمیل یا خود را وارد کنید"
              dir="rtl"
              type="text"
              name="gmail"
              id="gmail"
            />
            <ErrorMessage name="gmail" component={"span"} className="Error" />
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

        {isLoad ? (
          <DefualtButton
            sumbit
            Style={{
              background:
                "linear-gradient(to right bottom, #0DA39480, #40BE5D)",
              height: "40px",
              paddingBottom: "20px",
              fontSize: "16px",
              fontFamily: "IranSanse",
              width: "100%",
            }}
            innerHTML={<PropagateLoader color="white" />}
          />
        ) : (
          <DefualtButton sumbit innerHTML=" تکمیل ثبت نام " />
        )}
      </Form>
    </Formik>
  );
}

export default MainForm;
