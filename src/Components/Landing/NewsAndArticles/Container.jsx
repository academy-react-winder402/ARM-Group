import { useEffect, useState } from "react";
import "../../../index.css";
import { RightNews } from "./RightNews";
import { LeftNews } from "./LeftNews";
import { NavLink } from "react-router-dom";
import { Subject } from "../../Common/Landing/Subject";
import { getArticle } from "../../../Core/Services/api/Articlee/GetArticle.js";

export const MainNews = () => {
  const [data, setData] = useState([]);
  const GetArticle = async () => {
    const articleApi = await getArticle(3, 1);
    setData(articleApi);
    console.log(articleApi);
  };

  useEffect(() => {
    GetArticle();
  }, []);
  return (
    <div
      className="mt-[150px] w-[87.5%] mx-auto text-center mb-[115px]"
      style={{ direction: "rtl" }}
      data-aos="fade-down"
    >
      <div>
        <Subject title="اخبار و مقالات" description="مطالب روز حوزه تکنولوژی" />
      </div>

      <div className="mt-[150px] flex flex-col max-lg:items-center lg:flex-row flex-nowrap justify-center gap-[30px] pt-[10px] px-[5%] max-[800px]:px-[0px] overflow-visible">
        <RightNews />
        <LeftNews data={data} />
      </div>
      <div className="mt-[100px] text-[16px] text-[#787878] dark:text-Dark_TextColor_2">
        و بیش از
        <span
          className="text-[48px] text-[#787878] dark:text-Dark_TextColor_1"
          style={{ fontFamily: "IransnsNumber" }}
        >
          30
        </span>
        خبر، مقاله و نکته آموزشی دیگر
      </div>

      <NavLink
        to={"/Article"}
        className="w-[180px] relative flex items-center justify-center cursor-pointer h-[40px] text-[#fff] bg-[#E1C564] rounded-[10px] mx-auto"
      >
        مشاهده مقالات
      </NavLink>
    </div>
  );
};
