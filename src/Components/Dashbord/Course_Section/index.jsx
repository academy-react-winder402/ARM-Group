import Pagination from "../../Common/Pagination";
import TopFilter from "./TopFilter";
import Course_Item from "./Course_Item";
import Style from "./Style.module.css";
import { useState } from "react";

function Index() {
  const [Courses] = useState([
    {
      Id: 1,
      Onvan: "عنوان دوره آموزشی",
      Category: "دسته بندی",
      Ostad: "نام مدرس دوره",
      Date: "  ۱۴۰۲/۱/۱",
      Status: "Ended",
      Price: "۳۵۰.۰۰۰",
    },
    {
      Id: 2,
      Onvan: "عنوان دوره آموزشی",
      Category: "دسته بندی",
      Ostad: "نام مدرس دوره",
      Date: "  ۱۴۰۲/۱/۱",
      Status: "NotEvenStart",
      Price: "۳۵۰.۰۰۰",
    },
    {
      Id: 3,
      Onvan: "عنوان دوره آموزشی",
      Category: "دسته بندی",
      Ostad: "نام مدرس دوره",
      Date: "  ۱۴۰۲/۱/۱",
      Status: "InProgress",
      Price: "۳۵۰.۰۰۰",
    },
    {
      Id: 4,
      Onvan: "عنوان دوره آموزشی",
      Category: "دسته بندی",
      Ostad: "نام مدرس دوره",
      Date: "  ۱۴۰۲/۱/۱",
      Status: "Ended",
      Price: "۳۵۰.۰۰۰",
    },
    {
      Id: 5,
      Onvan: "عنوان دوره آموزشی",
      Category: "دسته بندی",
      Ostad: "نام مدرس دوره",
      Date: "  ۱۴۰۲/۱/۱",
      Status: "InProgress",
      Price: "۳۵۰.۰۰۰",
    },
  ]);

  return (
    <div className="w-[893px] h-fit relative">
      <div className="bg-white w-full h-[45px] text-[#5E5E5E] rounded-[10px] flex justify-end pr-3 items-center ">
        نکات و توضیحات لازم
      </div>

      <div className="bg-white pt-[47px] w-full h-[660px] mt-[15px] rounded-[10px]">
        <TopFilter />

        <div
          dir="rtl"
          className="border-[2px] border-[#C4CDD5] rounded-[15px] w-[869px] h-[472px] mt-[11px] pt-[8px]  m-auto"
        >
          <div className={Style.OnvanHolder}>
            <span className="w-[170px] mr-[80px]">عنوان دوره</span>
            <span className="w-[145px]"> مدرس </span>
            <span className="w-[95px]"> تاریخ </span>
            <span className="w-[110px]"> وضعیت </span>
            <span className="w-[145px]"> قیمت </span>
            <span className="w-[100px]">عملیات</span>
          </div>
          <div className={Style.ItemsHolder}>
            {Courses.map((Obj) => (
              <Course_Item CourseObj={Obj} key={Obj.Id} />
            ))}
          </div>
        </div>

        {/* <div className=" w-full h-[65px] flex justify-center items-end">
          <Pagination />
        </div> */}
      </div>
    </div>
  );
}

export default Index;
