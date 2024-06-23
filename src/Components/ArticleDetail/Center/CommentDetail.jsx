import { useState } from "react";
import { LikeDis } from "./LikeDis.jsx";
function CommentDetail({ data }) {
  return (
    <>
      {data.map((item, key) => (
        <div className="flex flex-col gap-4 h-[120px] mt-8" key={key}>
          <div className="h-[90px] flex gap-2">
            <img
              src="../../../../public/Image/ArticleDetail/ArticleDetailBg.png"
              alt="BackGround"
              className="w-[50px] h-[50px] rounded-[8px]"
            />
            <div className="w-full">
              <div className="flex justify-between mt-1 mb-3">
                <div className="flex text-textColor text-xs dark:text-[#ced4da]">
                  <span className="pl-3">{item.autor}</span>
                  <span>|</span>
                  <span className="px-3"> ۲۵ اردیبهشت ۱۴۰۳ </span>
                  <span className="hidden md:block">|</span>
                  <span className="px-3 hidden md:block">ساعت ۱۶:۲۴ </span>
                  <span className="hidden md:block">|</span>
                  <span className="pr-3 hidden md:block">۲ روز پیش</span>
                </div>
                <LikeDis data={data} />
              </div>
              <p className="text-xs text-textColor dark:text-[#adb5bd]">
                {item.describe}
              </p>
            </div>
          </div>
          <div className="h-[40px] border-b border-[#C2C2C2] pr-12 flex justify-between items-center pb-2">
            <div className="w-[116px] h-[25px] flex justify-center items-center text-[11px] text-textColor bg-[#e9ecef] rounded-[15px]">
              مشاهده پاسخ ها (۶)
            </div>
            <div className="w-[100px] h-[25px] flex justify-center gap-2 items-center text-[11px] text-textColor bg-[#e9ecef] rounded-[15px]">
              <span>پاسخ دادن</span>
              <img
                src="../../../../public/Image/ArticleDetail/redo.png"
                alt=""
                className="w-[15px] h-[13px]"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export { CommentDetail };

{
  /* {state.map((item, key) => {
          return (
            <div className="w-full" key={key}>
              <div className="flex justify-between mt-1 mb-3">
                <div className="flex text-textColor text-xs dark:text-[#ced4da]">
                  <span className="pl-3">{item.name}</span>
                  <span>|</span>
                  <span className="px-3">{item.date}</span>
                  <span className="hidden md:block">|</span>
                  <span className="px-3 hidden md:block">
                    {item.hours} ساعت
                  </span>
                  <span className="hidden md:block">|</span>
                  <span className="pr-3 hidden md:block">
                    {item.day} روز پیش
                  </span>
                </div>
                <LikeDislike />
              </div>
              <p className="text-xs text-textColor dark:text-[#adb5bd]">
                {item.desc}
              </p>
            </div>
          );
        })} */
}
