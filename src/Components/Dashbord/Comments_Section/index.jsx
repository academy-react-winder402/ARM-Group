import { useState } from "react";
import CustomSelect from "../../Common/FilterSelectOption/index";

function Index() {
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
    <div className="w-[893px] h-[567px]">
      <div className="bg-white w-full h-[45px] text-[#5E5E5E] rounded-[10px] flex justify-end pr-3 items-center ">
        نکات و توضیحات لازم
      </div>
      <div className="bg-white pt-[47px] w-full h-[507px] mt-[15px] rounded-[10px]">
        <div dir="rtl" className="flex gap-[10px] w-[869px] m-auto h-[42px]">
          <h1 className="text-[20px] text-[#4E4B4B] mt-2 flex-grow-[10]">
            کامنت های من
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
        <div className="border-[2px] border-[#C4CDD5] rounded-[15px] w-[869px] mt-[11px] h-[323px] m-auto"></div>
      </div>
    </div>
  );
}

export default Index;
