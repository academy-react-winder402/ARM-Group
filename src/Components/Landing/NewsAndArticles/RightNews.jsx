import React from "react";

export const RightNews = () => {
  return (
    <div className="h-[435px] w-[395px]">
      <img
        src="/Image/NewsAndArticleSection/RightNews.svg"
        alt=""
        className="block w-[392px] h-[280px]"
      />
      <div className="flex justify-between mt-[20px]">
        <span className="text-[10px] text-[#959595]">۱۴۰۰/۴/۲۳</span>
        <span className="inline-block w-[75px] h-[20px] text-[10px] text-[#FFFFFF] bg-[#7B7B7B] rounded-[13px] leading-[20px]">
          تکنولوژی
        </span>
      </div>
      <div className="w-fit h-[93px] mt-[15px]">
        <p className="text-[18px] text-right text-[#787878]">
          رفتارهای مثبتی که بعد از یادگیری برنامه نویسی یاد خواهید گرفت
        </p>
        <span className="RightNewsSpans"></span>
        <span className="RightNewsSpans mr-[20px]"></span>
        <div className="float-left relative">
          <span className="text-[12px] text-[#787878] text-nowrap absolute left-[45px] top-[10px]">
            نام نویسنده
          </span>
          <span className="borderStyle inline-block w-[42px] h-[42px] rounded-full"></span>
        </div>
      </div>
    </div>
  );
};
