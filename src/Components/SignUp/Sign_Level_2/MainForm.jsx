import toast from "react-hot-toast";
import PropagateLoader from "react-spinners/PropagateLoader";
import DefualtButton from "../../Common/DefualtButton";
import * as yup from "yup";

import { Register } from "../../../Core/Services/api/Auth/SignUp";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* redux */
import { useSelector } from "react-redux";

function MainForm() {
  const CurrPhoneNumber = useSelector((state) => state.SignUpForm.PhoneNumber);
  const navigate = useNavigate();
  const [isLoad, setIsload] = useState(false);

  const validation = yup.object({
    gmail: yup
      .string()
      .email("ایمیل خود را به درستی وارد کنید")
      .required("ایمیل خود را وارد کنید" + " * "),
    password: yup.string().required("رمز عبور الزامیست" + " * "),
  });

  const LastVerify = async (userObj) => {
    setIsload(true);
    const user = await Register(userObj);
    setIsload(false);

    if (user.success) {
      toast.success("ثبت نام با موفقیت انجام شد");
      navigate("/LogIn");
      toast("لطفا وارد شوید");
      //console.log(user);
    } else {
      toast.error("ثبت نام با موفقیت انجام نشد دوباره امتحان کنید");
    }
  };

  const onSubmit = (values) => {
    const UserObj = {
      password: values.password,
      gmail: values.gmail,
      phoneNumber: CurrPhoneNumber,
    };

    //console.log(UserObj);
    LastVerify(UserObj);
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
