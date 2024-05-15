import React from "react";

export const RightNews = () => {
  return (
    <div className="w-[392px] h-[435px]">
      <div className="w-[392px] h-[280px]">
        <img className="inline-block w-[100%] h-[100%] rounded-[15px]" src="./Image/NewsAndArticleSection/RightNews.png"/>
      </div>
      <div className="flex justify-between mt-[20px]">
        <span className="text-[10px] text-[#959595]">۱۴۰۰/۴/۲۳</span>
        <span className="inline-block w-[75px] h-[20px] text-[10px] text-[#FFFFFF] bg-[#7B7B7B] rounded-[13px] leading-[20px]">
          تکنولوژی
        </span>
      </div>
      <div className="w-fit h-[93px] mt-[15px]">
        <p className="text-[18px] text-right text-[#787878] dark:text-Dark_TextColor_1">
          رفتارهای مثبتی که بعد از یادگیری برنامه نویسی یاد خواهید گرفت
        </p>
        <span className="RightNewsSpans"></span>
        <span className="RightNewsSpans mr-[20px]"></span>
        <div className="float-left relative">
          <span className="text-[12px] text-[#787878] text-nowrap absolute left-[45px] top-[10px] dark:text-Dark_TextColor_2">
            نام نویسنده
          </span>
          <span className="borderStyle inline-block w-[42px] h-[42px] rounded-full"></span>
        </div>
      </div>
    </div>
  );
};
