import React from "react";

export const LeftNewsSections = () => {
  return (
    <div className="flex gap-5 h-[125px]">
      <div className="w-[160px] rounded-[15px] shadow-md">
        <img src="" className="h-auto" alt="" />
      </div>
      <div className="w-[310px] flex gap-2 flex-col">
        <span className="bg-[#7B7B7B] text-white flex items-center justify-center w-[75px] h-[20px] text-[10px] rounded-[13px]">
          تکنولوژی
        </span>
        <p className="text-[#777777] text-[14px] text-right pr-4 leading-6">
          عنوان خبر یا مقاله لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
          صنعت چاپ، و .... و
        </p>
        <div className="flex items-center gap-4">
          <div className="w-[42px] h-[42px] rounded-full shadow-md"></div>
          <span className="text-[#787878] text-[14px]">نام نویسنده</span>
        </div>
      </div>
    </div>
  );
};
