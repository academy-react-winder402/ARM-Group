import React from "react";

export const LeftNewsSections = () => {
  return (
    <div>
      <div>
        <div className="w-[160px] h-[125px]">
          <span className="inline-block absolute mr-[0px] text-[10px] text-[#FFFFFF] bg-[#707070] w-[75px] h-[20px] rounded-[13px]">تکنولوژی</span>
          <img className="border-[1px] border-black inline-block w-[160px] h-[100%] rounded-[15px]" src="" alt="" />
        </div>
        <div className="mt-[-21px] mr-[15px] flex flex-nowrap">
          <img className="border-[1px] border-black w-[42px] h-[42px] rounded-full" src="" alt="" />
          <span className="mt-[25px] text-[10px] text-[#787878]">نام نویسنده</span>
        </div>
      </div>
      <div className="text-[14px] text-[#777777] text-right">عنوان خبر یا مقاله  لورم ایپسوم متن ساختگی با تولید سادگی ، و .... و</div>
    </div>
  );
};
