import "../Style/Style.css";
import { CommentDetail } from "./CommentDetail.jsx";
function Comments() {
  return (
    <div>
      <div className="h-[540px] bg-white rounded-[15px] shadow-lg px-[14px] py-5 border">
        <div className="flex gap-1 justify-between">
          <h3 className="text-xl text-textColor border">نظرات</h3>
          <div className="comments border h-7 max-lg:text-[12px]">
            <input id="RadioA" type="radio" name="Radio" />
            <label htmlFor="RadioA">تعداد لایک</label>-
            <input id="RadioB" type="radio" name="Radio" />
            <label htmlFor="RadioB">قدیمی ترین</label>-
            <input id="RadioC" type="radio" name="Radio" />
            <label htmlFor="RadioC">جدید ترین</label>
          </div>
          <div className=" text-textColor h-7 flex gap-2 items-center border max-lg:text-[10px]">
            <span className="text-xl">۷۶</span>
            <span className="text-sm">نظر ثبت شده</span>
          </div>
        </div>
        <img
          src="../../../../public/Image/ArticleDetail/Line.png"
          alt="Line"
          className="mt-6"
        />

        <CommentDetail />
        <CommentDetail />
        <CommentDetail />
      </div>
    </div>
  );
}

export { Comments };
