import Pagination from "../../Common/Pagination";
import TopFilter from "./TopFilter";
import Comment_Item from "./Comment_Item";
import Style from "./Style.module.css";
import { useState } from "react";

function Index() {
  const [Comments] = useState([
    {
      Id: 1,
      CommentText: "کامنت تستی مهدی",
      CommentOnvan: "کامنتتتتمکستیبمنسشیتبکتشسبک",
      Category: " ۱۲ / تیر/۱۴۰۳   ",
      Answer: "پاسخ",
    },
    {
      Id: 1,
      CommentText: "ریپلایییییییییییییی ۱   ",
      CommentOnvan: "شسب برای ریپلایی",
      Category: " ۱۳ / خرداد /۱۴۰۳     ",
      Answer: "پاسخ",
    },
    {
      Id: 1,
      CommentText: "ریپلای تستی شماره یک",
      CommentOnvan: "تست ریپلای",
      Category: " ۳ / تیر/۱۴۰۳   ",
      Answer: "پاسخ",
    },
    {
      Id: 1,
      CommentText: "ریپلای تستی  ",
      CommentOnvan: "تست ریپلای",
      Category: " ۱۲ / تیر/۱۴۰۳   ",
      Answer: "پاسخ",
    },
  ]);
  return (
    <div className="w-[893px] h-[567px]">
      <div className="bg-white w-full h-[45px] text-[#5E5E5E] rounded-[10px] flex justify-end pr-3 items-center ">
        نکات و توضیحات لازم
      </div>

      <div className="bg-white pt-[47px] w-full h-[507px] mt-[15px] rounded-[10px]">
        <TopFilter />

        <div
          dir="rtl"
          className="border-[2px] border-[#C4CDD5] rounded-[15px] w-[869px] mt-[11px] pt-[8px]  h-[323px] m-auto"
        >
          <div className={Style.OnvanHolder}>
            <span className="w-[263px] ">متن کامنت</span>
            <span className="w-[377px]">موضوع کامنت</span>
            <span className="w-[177px]">تاریخ</span>
          </div>
          <div className={Style.ItemsHolder}>
            {Comments.map((Obj) => (
              <Comment_Item CommentObj={Obj} key={Obj.Id} />
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
