import React from "react";
import "../../../index.css";
import { RightNews } from "./RightNews";
import { LeftNews } from "./LeftNews";
import { NavLink } from "react-router-dom";

export const MainNews = () => {
  return (
    <div
      className="mt-[200px] w-[87.5%] h-[920px] mx-auto text-center mb-[115px]"
      style={{ direction: "rtl" }}
      data-aos="fade-down"
    >
      <div className="text-[30px] text-[#5E5E5E] mt-[65px] dark:text-Dark_TextColor_1">اخبار و مقالات</div>
      <div className="text-[16px] text-[#7E7E7E] mt-[20px] dark:text-Dark_TextColor_1">
        مطالب روز حوزه تکنولوژی
      </div>
      <div className="mt-[70px] flex flex-nowrap justify-center gap-[30px] pt-[10px] px-[5%] max-[800px]:px-[0px] overflow-visible">
        <RightNews />
        <LeftNews />
      </div>
      <div className="mt-[100px] text-[16px] text-[#787878] dark:text-Dark_TextColor_2">
        و بیش از<span className="text-[48px] text-[#787878] dark:text-Dark_TextColor_1">۱۳۰</span> خبر،
        مقاله و نکته آموزشی دیگر{" "}
      </div>

      <NavLink
        to={"/Article"}
        className="block w-[180px] relative flex items-center justify-center cursor-pointer h-[40px] text-[#fff] bg-[#E1C564] rounded-[10px] mx-auto"
      >
        مشاهده مقالات
      </NavLink>
    </div>
  );
};
