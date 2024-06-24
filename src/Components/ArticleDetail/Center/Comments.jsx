import "../Style/Style.css";
import { CommentDetail } from "./CommentDetail.jsx";
function Comments({ data }) {
  return (
    <div>
      <div className="sm:w-[700px] w-auto container relative translate-x-1/2 right-1/2 bg-white rounded-[15px] shadow-lg px-[14px] py-6 mb-6 dark:bg-[#343a40]">
        <div className="flex gap-1 justify-between">
          <h3 className="text-xl text-textColor dark:text-[#dee2e6]">نظرات</h3>
          <div className="comments h-7 max-lg:text-[12px] max-sm:text-[10px] dark:text-[#ced4da]">
            <input id="RadioA" type="radio" name="Radio" />
            <label htmlFor="RadioA">تعداد لایک</label>-
            <input id="RadioB" type="radio" name="Radio" />
            <label htmlFor="RadioB">قدیمی ترین</label>-
            <input id="RadioC" type="radio" name="Radio" />
            <label htmlFor="RadioC">جدید ترین</label>
          </div>
          <div className=" text-textColor h-7 flex gap-2 items-center max-sm:text-[10px] max-lg:text-[12px] dark:text-[#dee2e6]">
            <span className="text-[20px]">--</span>
            <span>نظر ثبت شده</span>
          </div>
        </div>
        <img
          src="../../../../public/Image/ArticleDetail/Line.png"
          alt="Line"
          className="mt-6"
        />

        <CommentDetail data={data} />
      </div>
    </div>
  );
}

export { Comments };
