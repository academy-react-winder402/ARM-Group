import { useState } from "react";
import CustomSelect from "../../Common/FilterSelectOption/index";

function TopFilter() {
  const [Options_Category] = useState([
    { value: "0", innerHTML: "همه", defaultHTML: "دسته بندی" },
    { value: "1", innerHTML: "خبر و مقاله" },
    { value: "2", innerHTML: "دوره آموزشی" },
  ]);
  const [Options_Vaziat] = useState([
    { value: "0", innerHTML: "همه", defaultHTML: "همه وضعیت ها" },
    { value: "1", innerHTML: "خبر و مقاله" },
    { value: "2", innerHTML: "دوره آموزشی" },
  ]);
  const [Options_Page] = useState([
    { value: "0", innerHTML: "۲۴", defaultHTML: "۲۴" },
    { value: "1", innerHTML: "۱۲" },
    { value: "2", innerHTML: "۸" },
  ]);
  return (
    <div dir="rtl" className="flex gap-[10px] w-[869px] m-auto h-[42px]">
      <h1 className="text-[20px] text-[#4E4B4B] mt-2 flex-grow-[10]">
        دوره های من
      </h1>
      <div className="flex-grow-[2] max-w-[160px] text-[#808080] indent-0 rounded-[10px] cursor-pointer bg-[#F2F2F2]">
        <CustomSelect
          Options={Options_Category}
          type="SimpleSelect"
          Id="SelectCategorie"
        />
      </div>
      <div className="flex-grow-[2] max-w-[160px] text-[#808080] text-start rounded-[10px] cursor-pointer bg-[#F2F2F2]">
        <CustomSelect
          Options={Options_Vaziat}
          type="SimpleSelect"
          Id="SelectVaziat"
        />
      </div>
      <div className="flex-grow-[1] max-w-[87px] text-[#A7A7A7] rounded-[10px] cursor-pointer bg-[#F2F2F2]">
        <CustomSelect
          Options={Options_Page}
          type="SimpleSelect"
          IsNumberType
          Id="SelectCardInPage"
        />
      </div>
    </div>
  );
}

export default TopFilter;
