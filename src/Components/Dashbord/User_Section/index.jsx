/* eslint-disable react-hooks/rules-of-hooks */

import { useEffect, useState } from "react";
import PieChartWithCenterLabel from "./PieChartWithCenterLabel.jsx";
import { GetUserInfo } from "../../../Core/Services/api/Panel/GetUserInfo";

function index() {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const fetchInfo = async () => {
      const info = await GetUserInfo();
      setUserInfo(info);
    };
    fetchInfo();
  }, []);

  const [corseReserve] = useState([
    { id: 1, numbers: "۷" },
    { id: 2, numbers: "۷" },
    { id: 3, numbers: "۷" },
    { id: 4, numbers: "۷" },
    { id: 5, numbers: "۷" },
  ]);
  const [data] = useState([
    { id: 1, title: "عنوان دیتا", number: "۴۳۰" },
    { id: 2, title: "", number: "" },
    { id: 3, title: "", number: "" },
    { id: 4, title: "", number: "" },
    { id: 5, title: "", number: "" },
    { id: 6, title: "", number: "" },
    { id: 7, title: "", number: "" },
    { id: 8, title: "", number: "" },
  ]);
  const [activeCourse] = useState([
    { id: 1, number: "۳" },
    { id: 2, number: "۰" },
    { id: 3, number: "۴" },
    { id: 4, number: "۷" },
  ]);

  return (
    <div className="w-[893px] h-fit relative text-[#4E4B4B]">
      <div className="bg-white w-full h-[45px] text-[#5E5E5E] rounded-[10px] flex justify-end pr-3 items-center ">
        نکات و توضیحات لازم
      </div>
      <div
        className="bg-white w-full h-[2000px] mt-4 rounded-[10px] pt-6 px-6"
        dir="rtl"
      >
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-sm">{userInfo.lName} خوش آمدید</span>

            <div className="mt-5 ">
              <h1> شماره تماس :</h1>
              <h1 className="text-[12px] mt-2">{userInfo.phoneNumber}</h1>
            </div>
            <div className="mt-5 ">
              <h1> ایمیل :</h1>
              <h1 className="text-[12px] mt-2">{userInfo.email}</h1>
            </div>
            <div className="mt-5 ">
              <h1> درباره کاربر :</h1>
              <h1 className="text-[12px] mt-2">{userInfo.userAbout}</h1>
            </div>
            <div className="mt-5 ">
              <h1> محل سکونت :</h1>
              <h1 className="text-[12px] mt-2">{userInfo.homeAdderess}</h1>
            </div>
          </div>

          <div className="w-[320px] h-[140px]">
            <div className="flex gap-2">
              <div className="w-[200px] flex flex-col gap-2">
                <div className="h-[100px]">
                  <div className="h-1/2">
                    <div className="flex justify-between text-sm">
                      <span>هفته</span>
                      <span>چهارشنبه</span>
                    </div>
                    <div className="h-2 w-ful bg-[#E1E1E1] rounded-[5px] mt-1">
                      <div className="w-2/3 h-full bg-[#57C56D] rounded-[5px]"></div>
                    </div>
                  </div>
                  <div className="h-1/2">
                    <p>ماه</p>
                    <div className="h-2 w-ful bg-[#E1E1E1] rounded-[5px] mt-1">
                      <div className="w-1/3 h-full bg-[#57C56D] rounded-[5px]"></div>
                    </div>
                  </div>
                </div>
                <span className="text-sm">مناسبت روز</span>
              </div>
              <div className="w-[100px]">
                <div className="h-[100px] flex items-center justify-center relative">
                  <img
                    src="../Image/Dashbord/User/calendar.png"
                    alt="calender"
                  />
                  <span className="text-4xl  absolute right-1/2 translate-x-1/2 translate-y-1/2">
                    ۱۲
                  </span>
                </div>
                <div className="text-2xl flex justify-center">خرداد</div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-[20px]  font-semibold mt-[150px]">حسابداری</h2>
        <div className="w-[300px] h-[130px] mx-auto flex justify-between items-center flex-wrap">
          {activeCourse.map((item) => {
            return (
              <div
                className="flex justify-between items-center w-[115px]"
                key={item.id}
              >
                <span className=" text-sm">دوره های فعال</span>
                <span className="text-[32px] font-medium ">{item.number}</span>
              </div>
            );
          })}
        </div>
        <div className="h-[130px] flex justify-between">
          <div className="flex gap-[22px] self-end pr-8">
            <div className="w-[148px] h-[93px] bg-[#F5F5F4] rounded-[10px]"></div>
            <div className="w-[148px] h-[93px] bg-[#F5F5F4] rounded-[10px]"></div>
            <div className="w-[148px] h-[93px] bg-[#F5F5F4] rounded-[10px]"></div>
          </div>
          <div className="w-[250px] ml-8">
            <img src="../Image/Dashbord/User/Group149.png" alt="rang" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
