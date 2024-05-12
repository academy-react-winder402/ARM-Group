import "../Style/Style.css";
import { CommentDetail } from "./CommentDetail.jsx";
function Comments() {
  return (
    <div>
      <div className="h-[540px] rounded-[15px] shadow-lg px-[14px] py-5">
        <div className="flex justify-between ">
          <h3 className="text-xl text-textColor w-20">نظرات</h3>
          <div className="comments w-[250px] h-7">
            <input id="RadioA" type="radio" name="Radio" />
            <label htmlFor="RadioA">تعداد لایک</label>-
            <input id="RadioB" type="radio" name="Radio" />
            <label htmlFor="RadioB">قدیمی ترین</label>-
            <input id="RadioC" type="radio" name="Radio" />
            <label htmlFor="RadioC">جدید ترین</label>
          </div>
          <div className="w-[120px] text-textColor h-7 flex gap-2 items-center">
            <span className="text-xl">۷۶</span>
            <span className="text-sm">نظر ثبت شده</span>
          </div>
        </div>
        <img src="./Image/ArticleDetail/Line.png" alt="Line" className="mt-6" />

        <CommentDetail />
        <CommentDetail />
        <CommentDetail />
      </div>
    </div>
  );
}

export { Comments };
