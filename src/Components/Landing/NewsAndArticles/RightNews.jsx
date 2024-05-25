import React from "react";

export const RightNews = () => {
  return (
    <div className="w-[392px] h-[435px]">
      <div className="w-[392px] h-[280px]">
        <img
          className="inline-block w-[100%] h-[100%] rounded-[15px]"
          src="./Image/NewsAndArticleSection/RightNews.png"
        />
      </div>
      <div className="flex justify-between mt-[20px]">
        <span className="text-[10px] text-[#959595]">۱۴۰۰/۴/۲۳</span>
        <span className="inline-block w-[75px] h-[20px] text-[10px] text-[#FFFFFF] bg-[#7B7B7B] rounded-[13px] leading-[20px]">
          تکنولوژی
        </span>
      </div>
      <div className="flex flex-col w-fit h-[93px] mt-[15px]">
        <p className="text-[18px] text-right text-[#787878] dark:text-Dark_TextColor_1">
          رفتارهای مثبتی که بعد از یادگیری برنامه نویسی یاد خواهید گرفت
        </p>
        <div className="flex">
          <div className="w-1/2 flex gap-2 items-center">
            <span className="w-[80px] h-[25px] rounded-[20px] border-[#787878] border-2"></span>
            <span className="w-[80px] h-[25px] rounded-[20px] border-[#787878] border-2"></span>
          </div>
          <div className="w-1/2 flex justify-end items-center gap-3">
            <span className="text-[#787878] text-[12px]">نام نویسنده</span>
            <div className="w-[42px] h-[42px] rounded-full shadow-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
