import React from "react";
import { DetailsSection1 } from "./DetailsSection1";

const Details = () => {
  return (
    <div
      className="w-[87.5%] mx-auto mt-[100px] pt-[1rem]"
      style={{ direction: "rtl" }}
    >
      <DetailsSection1 />
      <div className="h-[95px] pt-[10px] mt-[115px]">
        <div className="w-[44%] h-[100%] float-right">
          <h1 className="mt-[-10px] text-[24px] text-[#5E5E5E] font-bold">
            خلاصه وضعیت دوره
          </h1>
          <div className="mt-[10px]">
            <p className="float-right text-[#7E7E7E] font-medium xxx">
              درصد انجام تمارین: ۷۸٪{" "}
            </p>
            <span className="w-[81px] h-[30px] text-center inline float-right mr-[1rem] rounded-[15px] border-[3px] border-[#DF9CD2] text-[#808080] text-[15px]">
              متوسط
            </span>
          </div>
        </div>
        <div className="w-[56%] h-[100%] float-right text-[14px] text-[#6E6E6E]">
          <div className="flex flex-row flex-nowrap mr-[100px]">
            <div className="flex flex-row flex-nowrap">
              <span className="">تعداد روز های دوره</span>
              <span>۲۳۰</span>
              <span>روز</span>
            </div>
            <div className="w-[231.5px] h-[4px] mt-[8px] mr-[3px] rounded-[1rem] bg-[#DBDBDB] overflow-hidden">
              <div className="bg-[#69EECE] w-[50%] h-[100%] float-left"></div>
            </div>
            <div className="flex flex-row flex-nowrap gap-[5px]">
              <span>روز‌های باقی مانده</span>
              <span>۸۰</span>
              <span>روز</span>
            </div>
          </div>
          <div className="flex flex-row flex-nowrap mt-[15px] mr-[100px]">
            <div className="flex flex-row flex-nowrap">
              <span>شهریه دوره</span>
              <span>۴.۲۰۰.۰۰۰</span>
              <span>تومان</span>
            </div>
            <div className="w-[231.5px] h-[4px] mt-[12px] mr-[3px] rounded-[1rem] bg-[#DBDBDB] overflow-hidden">
              <div className="bg-[#F3DD6D] w-[50%] h-[100%] float-left"></div>
            </div>
            <div className="flex flex-row flex-nowrap">
              <span>باقی‌مانده شهریه</span>
              <span>۲.۱۰۰.۰۰۰</span>تومان<span></span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-nowrap justify-between text-center pt-[35px] px-[65px]">
        <div className="CourseDetailstexts">
          <div>۳۴۰</div>
          <div className="text-[18px] font-normal">تعداد دانشجو</div>
        </div>
        <div className="CourseDetailstexts">
          <div>۱۴</div>
          <div className="text-[18px] font-normal">سرفصل آموزشی</div>
        </div>
        <div className="CourseDetailstexts">
          <div>۱۲</div>
          <div className="text-[18px] font-normal">جلسه فعلی</div>
        </div>
        <div className="CourseDetailstexts">
          <div>۱۲</div>
          <div className="text-[18px] font-normal">جلسات باقی مانده</div>
        </div>
      </div>

      <div className="mt-[45px] h-[500px] bg-[#FEFEFE] pt-[30px] rounded-[15px] ">
        <div className="w-[95%] h-[63px] pt-[17px] mx-auto flex flex-nowrap justify-between rounded-[8px] px-[35px] bg-[#FFFFFF] drop-shadow-[-5px_5px_10px_rgba(0,0,0,0.11)]">
          <div className="CourseDetailstexts2">توضیحات</div>
          <div className="CourseDetailstexts2">سرفصل ها</div>
          <div className="CourseDetailstexts2">ارسال تسک</div>
          <div className="CourseDetailstexts2">نمرات من</div>
          <div className="CourseDetailstexts2">حسابداری</div>
        </div>
      </div>
    </div>
  );
};

export default Details;
