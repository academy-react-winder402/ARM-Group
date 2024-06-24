import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import DefualtButton from "../../Common/DefualtButton";
import { useEffect, useState } from "react";
import { GetUserInfo } from "../../../Core/Services/api/Panel/GetUserInfo";
import { UpdateProfileInfo } from "../../../Core/Services/api/Panel/UpdateProfileInfo";

function Index() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchInfo = async () => {
      const info = await GetUserInfo();
      setUserInfo(info);
    };
    fetchInfo();
  }, []);

  const onSubmit = (values) => {
    console.log(values); // Display submitted values in console

    const formData = new FormData();
    for (const key in values) {
      formData.append(key, values[key]);
    }

    UpdateProfileInfo(formData);
    toast.success("عملیات با موفقیت انجام شد.");
  };

  if (!userInfo) {
    return <div>درحال بار گزاری</div>; // Show a loading state while fetching data
  }

  return (
    <div className="w-[893px] h-fit relative text-[#4E4B4B]">
      <div className="bg-white w-full h-[45px] text-[#5E5E5E] rounded-[10px] flex justify-end pr-3 items-center">
        نکات و توضیحات لازم
      </div>
      <div
        className="bg-white w-full h-fit pb-4 mt-4 rounded-[10px] pt-6 px-6"
        dir="rtl"
      >
        <Formik
          enableReinitialize
          initialValues={{
            FName: userInfo.fName || "",
            LName: userInfo.lName || "",
            UserAbout: userInfo.userAbout || "",
            LinkdinProfile: userInfo.linkdinProfile || "",
            TelegramLink: userInfo.telegramLink || "",
            HomeAdderess: userInfo.homeAdderess || "",
            NationalCode: userInfo.nationalCode || "",
            Gender: userInfo.gender || "",
            BirthDay: userInfo.birthDay || "",
            Latitude: userInfo.latitude || "",
            Longitude: userInfo.longitude || "",
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
                  نام
                </h3>
                <div className="InputHolder overflow-visible dark:bg-[url('/Image/LogIn/lock-Dark.svg')] bg-no-repeat bg-[10px_7px] w-[100%]">
                  <Field
                    placeholder="نام خود را وارد کنید"
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
                  نام خانوادگی
                </h3>
                <div className="InputHolder overflow-visible dark:bg-[url('/Image/LogIn/lock-Dark.svg')] bg-no-repeat bg-[10px_7px] w-[100%]">
                  <Field
                    placeholder="نام خانوادگی خود را وارد کنید"
                    dir="rtl"
                    name="LName"
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="mt-[25px] w-[470px] m-auto mb-[50px]">
                <h3
                  dir="rtl"
                  className="text-[#727272] dark:text-Dark_TextColor_1 text-[17px] indent-[15px] mb-[10px]"
                >
                  درباره
                </h3>
                <div className="InputHolder overflow-visible dark:bg-[url('/Image/LogIn/lock-Dark.svg')] bg-no-repeat bg-[10px_7px] w-[100%]">
                  <Field
                    placeholder="زندگینامه را وارد کنید"
                    dir="rtl"
                    name="UserAbout"
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="mt-[25px] w-[270px] m-auto mb-[50px]">
                <h3
                  dir="rtl"
                  className="text-[#727272] dark:text-Dark_TextColor_1 text-[17px] indent-[15px] mb-[10px]"
                >
                  آدرس لینکدین
                </h3>
                <div className="InputHolder overflow-visible dark:bg-[url('/Image/LogIn/lock-Dark.svg')] bg-no-repeat bg-[10px_7px] w-[100%]">
                  <Field
                    placeholder="آدرس لینکدین خود را وارد کنید"
                    dir="rtl"
                    name="LinkdinProfile"
                  />
                </div>
              </div>
              <div className="mt-[25px] w-[270px] m-auto mb-[50px]">
                <h3
                  dir="rtl"
                  className="text-[#727272] dark:text-Dark_TextColor_1 text-[17px] indent-[15px] mb-[10px]"
                >
                  آدرس تلگرام
                </h3>
                <div className="InputHolder overflow-visible dark:bg-[url('/Image/LogIn/lock-Dark.svg')] bg-no-repeat bg-[10px_7px] w-[100%]">
                  <Field
                    placeholder="آدرس تلگرام خود را وارد کنید"
                    dir="rtl"
                    name="TelegramLink"
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="mt-[25px] w-[570px] m-auto mb-[50px]">
                <h3
                  dir="rtl"
                  className="text-[#727272] dark:text-Dark_TextColor_1 text-[17px] indent-[15px] mb-[10px]"
                >
                  آدرس خانه
                </h3>
                <div className="InputHolder overflow-visible dark:bg-[url('/Image/LogIn/lock-Dark.svg')] bg-no-repeat bg-[10px_7px] w-[100%]">
                  <Field
                    placeholder="آدرس خانه خود را وارد کنید"
                    dir="rtl"
                    name="HomeAdderess"
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
