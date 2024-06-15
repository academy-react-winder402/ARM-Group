// import { PieChart } from "react-minimal-pie-chart";
// import type { PieChartProps } from 'react-minimal-pie-chart';

import PieChartWithCenterLabel from "./PieChartWithCenterLabel.jsx";

function index() {
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
          <span className="text-[14px] ">کاربر گرامی خوش آمدید</span>
          <div className="w-[320px] h-[140px]">
            <div className="flex gap-2">
              <div className="w-[200px] flex flex-col gap-2">
                <div className="h-[100px] border">h</div>
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
        <h2 className="mt-10 text-[20px]  font-semibold">
          وضعیت دوره های آموزشی
        </h2>
        <div className="flex justify-center gap-20">
          <div className="w-[300px] h-[220px] self-end flex flex-col justify-center gap-5">
            <div className="flex gap-2">
              <div className="w-5 h-5 rounded-full bg-[#60CEAC]"></div>
              <div className="text-sm flex justify-between w-[80%]">
                <span>دوره های رزروشده</span>
                <span>۷</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-5 h-5 rounded-full bg-[#60CEAC]"></div>
              <div className="text-sm flex justify-between w-[80%]">
                <span>دوره های رزروشده</span>
                <span>۷</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-5 h-5 rounded-full bg-[#60CEAC]"></div>
              <div className="text-sm flex justify-between w-[80%]">
                <span>دوره های رزروشده</span>
                <span>۷</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-5 h-5 rounded-full bg-[#60CEAC]"></div>
              <div className="text-sm flex justify-between w-[80%]">
                <span>دوره های رزروشده</span>
                <span>۷</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-5 h-5 rounded-full bg-[#60CEAC]"></div>
              <div className="text-sm flex justify-between w-[80%]">
                <span>دوره های رزروشده</span>
                <span>۷</span>
              </div>
            </div>
          </div>
          <div className="w-[300px] h-[300px] flex items-end">
            <PieChartWithCenterLabel />
          </div>
        </div>
        <div className="mt-16 flex justify-center flex-wrap gap-4">
          <div className="w-[192px] h-[120px] rounded-[10px] bg-[#F5F5F4]"></div>
          <div className="w-[192px] h-[120px] rounded-[10px] bg-[#F5F5F4]"></div>
          <div className="w-[192px] h-[120px] rounded-[10px] bg-[#F5F5F4]"></div>
          <div className="w-[192px] h-[120px] rounded-[10px] bg-[#F5F5F4]"></div>
          <div className="w-[192px] h-[120px] rounded-[10px] bg-[#F5F5F4]"></div>
          <div className="w-[192px] h-[120px] rounded-[10px] bg-[#F5F5F4]"></div>
          <div className="w-[192px] h-[120px] rounded-[10px] bg-[#F5F5F4]"></div>
          <div className="w-[192px] h-[120px] rounded-[10px] bg-[#F5F5F4]"></div>
        </div>
        <h2 className="text-[20px]  font-semibold mt-[130px]">
          دوره های آموزسی بر اساس سلیقه شما
        </h2>
        <div className="h-[470px] mt-[30px] border-2 border-[#C4CDD5] rounded-[15px]"></div>
        <h2 className="text-[20px]  font-semibold mt-[50px]">حسابداری</h2>
        <div className="w-[300px] h-[130px] mx-auto flex justify-between items-center flex-wrap">
          <div className="flex justify-between items-center w-[115px]">
            <span className=" text-sm">دوره های فعال</span>
            <span className="text-[32px] font-medium ">۳</span>
          </div>
          <div className="flex justify-between items-center w-[115px]">
            <span className=" text-sm">دوره های فعال</span>
            <span className="text-[32px] font-medium ">۳</span>
          </div>
          <div className="flex justify-between items-center w-[115px]">
            <span className=" text-sm">دوره های فعال</span>
            <span className="text-[32px] font-medium ">۳</span>
          </div>
          <div className="flex justify-between items-center w-[115px]">
            <span className=" text-sm">دوره های فعال</span>
            <span className="text-[32px] font-medium ">۳</span>
          </div>
        </div>
        <div className="h-[130px] flex justify-between">
          <div className="flex gap-[22px] self-end pr-8">
            <div className="w-[148px] h-[93px] bg-[#F5F5F4] rounded-[10px]"></div>
            <div className="w-[148px] h-[93px] bg-[#F5F5F4] rounded-[10px]"></div>
            <div className="w-[148px] h-[93px] bg-[#F5F5F4] rounded-[10px]"></div>
          </div>
          <div className="w-[250px] ml-8 border"></div>
        </div>
      </div>
    </div>
  );
}

export default index;
