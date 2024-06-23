import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import DefualtButton from "../../Common/DefualtButton";
import { ChangePassword } from "../../../Core/Services/api/Panel/UpdateProfileInfo.js";
import { useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate();

  const onSubmit = (values) => {
    console.log(values); // Display submitted values in console

    ChangePassword(values.FName, values.LName);

    toast.success("عملیات با موفقیت انجام شد.");
    navigate("/LogIn");
  };

  return (
    <div className="w-[893px] h-fit relative text-[#4E4B4B]">
      <div className="bg-white w-full h-[45px] text-[#5E5E5E] rounded-[10px] flex justify-end pr-3 items-center">
        تغییر رمز عبور
      </div>
      <div
        className="bg-white w-full h-fit pb-4 mt-4 rounded-[10px] pt-6 px-6"
        dir="rtl"
      >
        <Formik
          enableReinitialize
          initialValues={{
            FName: "",
            LName: "",
          }}
          onSubmit={onSubmit}
        >
          <Form>
            <div className="flex">
              <div className="mt-[25px] w-[270px] m-auto mb-[50px]">
                <h3
                  dir="rtl"
                  className="text-[#727272] dark:text-Dark_TextColor_1 text-[17px] indent-[15px] mb-[10px]"
                >
                  رمز عبور فعلی
                </h3>
                <div className="InputHolder overflow-visible dark:bg-[url('/Image/LogIn/lock-Dark.svg')] bg-no-repeat bg-[10px_7px] w-[100%]">
                  <Field
                    placeholder="رمز عبور فعلی خود را وارد کنید"
                    dir="rtl"
                    name="FName"
                  />
                </div>
              </div>
              <div className="mt-[25px] w-[270px] m-auto mb-[50px]">
                <h3
                  dir="rtl"
                  className="text-[#727272] dark:text-Dark_TextColor_1 text-[17px] indent-[15px] mb-[10px]"
                >
                  رمز عبور جدید
                </h3>
                <div className="InputHolder overflow-visible dark:bg-[url('/Image/LogIn/lock-Dark.svg')] bg-no-repeat bg-[10px_7px] w-[100%]">
                  <Field
                    placeholder="رمز عبور جدید خود را وارد کنید"
                    dir="rtl"
                    name="LName"
                  />
                </div>
              </div>
            </div>

            <div className="w-[300px] m-auto">
              <DefualtButton type="submit" sumbit innerHTML="تایید" />
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Index;
