import React from "react";

export const LeftNewsSections = () => {
  return (
    <div className="h-[125px] flex flex-nowrap gap-[20px]">
      <img
        src=""
        alt=""
        className="block border w-[160px] h-[100%] rounded-[15px]"
      />
      <div className="h-[100%] w-[340px]">
        <span className="block w-[75px] h-[20px] text-[10px] text-[#FFFFFF] bg-[#7B7B7B] rounded-[13px] leading-[20px]">
          تکنولوژی
        </span>
        <p className="mt-[7px] text-right text-[14px] text-[#777777] text-wrap">
          عنوان خبر یا مقاله لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
          صنعت چاپ، و .... و
        </p>
        <div>
          <span className="borderStyle mt-[15px] block w-[42px] h-[42px] rounded-full float-right"></span>
          <span className="text-[12px] text-[#787878] text-nowrap float-right mt-[25px] mr-[5px]">
            نام نویسنده
          </span>
        </div>
      </div>
    </div>
  );
};
