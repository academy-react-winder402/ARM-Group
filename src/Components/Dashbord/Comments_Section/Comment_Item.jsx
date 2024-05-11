import OverviewIcon from "../../../../public/Image/Dashbord/Comments/overview";
import ArrowSquareIcon from "../../../../public/Image/Dashbord/Comments/arrowSquare";
function Comment_Item() {
  return (
    <div>
      <span className="w-[263px]">متن کامنت</span>
      <span className="w-[177px]">موضوع کامنت</span>
      <span className="w-[140px]">دسته بندی</span>
      <span className="w-[120px]">پاسخ</span>
      <span className="w-[75px] flex justify-start items-center pr-4">
        <ArrowSquareIcon />
      </span>
      <span className="w-[75px] flex justify-start items-center pr-7">
        <OverviewIcon />
      </span>
    </div>
  );
}

export default Comment_Item;
