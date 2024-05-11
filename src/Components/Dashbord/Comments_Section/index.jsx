import Pagination from "../../Common/Pagination";
import TopFilter from "./TopFilter";
import Comment_Item from "./Comment_Item";
import "./style.css";

function Index() {
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
          <div className="OnvanHolder">
            <span className="w-[263px] ">متن کامنت</span>
            <span className="w-[177px]">موضوع کامنت</span>
            <span className="w-[140px]">دسته بندی</span>
            <span className="w-[120px]">پاسخ</span>
            <span className="w-[75px]">لینک</span>
            <span className="w-[75px]">مشاهده</span>
          </div>
          <div className="ItemsHolder">
            <Comment_Item />
            <Comment_Item />
            <Comment_Item />
            <Comment_Item />
            <Comment_Item />
          </div>
        </div>
      </div>

      <Pagination />
    </div>
  );
}

export default Index;
