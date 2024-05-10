import ViewSelect from "./ViewSelect";

import VaziatButt from "./VaziatButt";
import Badge from "../../../Common/Badge/Badge";
import toast from "react-hot-toast";
import CustomSelect from "../../../Common/FilterSelectOption";

/* redux: */
import { useDispatch } from "react-redux";
import { toggleDeleteAll } from "../../../../Redux/Slices/CourseFilter";
import { useState } from "react";

function Index() {
  /* const DeleteStatus = useSelector((state) => state.CourseFilter.DeleteAll); */
  const Dispatch = useDispatch();

  const DeletAllHandler = () => {
    Dispatch(toggleDeleteAll());
    setTimeout(() => {
      Dispatch(toggleDeleteAll());
    }, 100);

    toast.success("All Filters Deleted");
  };

  const [Options_Page] = useState([
    { value: "0", innerHTML: "۲۴", defaultHTML: "۲۴" },
    { value: "1", innerHTML: "۱۲" },
    { value: "2", innerHTML: "۸" },
  ]);

  return (
    <div className="FilterSection_2 ">
      <div className="flex-grow-[6] text-[10px] leading-[40px] ">
        تعداد ۴۸ نتیجه از ۲۳۰ دوره طبق جستتجوی شما برای شما یافت شد
      </div>

      <div className="flex-grow-[10] pr-20 pt-3">
        <Badge
          onClick={DeletAllHandler}
          innerHTML="حذف تمامی فیلتر‌ها"
          className="w-fit"
        />
      </div>

      <div className="flex-grow-[1] overflow-hidden CostumButtFilter">
        <VaziatButt />
      </div>

      <div className="flex-grow-[1] CostumButtFilter min-w-[85px] max-w-[85px]">
        <CustomSelect
          Options={Options_Page}
          type="SimpleSelect"
          Id="SelectCardInPage"
        />
      </div>

      <div className="flex-grow-[1] overflow-hidden CostumButtFilter">
        <ViewSelect />
      </div>
    </div>
  );
}

export default Index;
