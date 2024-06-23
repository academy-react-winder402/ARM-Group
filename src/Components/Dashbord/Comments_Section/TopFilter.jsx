import { useState } from "react";
import CustomSelect from "../../Common/FilterSelectOption/index";

function TopFilter() {
  const [Options_Category] = useState([
    { value: "0", innerHTML: "همه", defaultHTML: "همه موضوعات" },
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
        کامنت های من
      </h1>
    </div>
  );
}

export default TopFilter;
