import { useEffect, useState } from "react";
import ViewSelect from "./ViewSelect";
import VaziatButt from "./VaziatButt";
import Badge from "../../../Common/Badge/Badge";
import toast from "react-hot-toast";
import CustomSelect from "../../../Common/FilterSelectOption";

/* redux: */
import {
  toggleDeleteAll,
  SetShowDeleteAllBut,
  SetItemPerPage,
} from "../../../../Redux/Slices/CourseFilter";
import { useDispatch, useSelector } from "react-redux";

function Index() {
  const DeleteButStatus = useSelector(
    (state) => state.CourseFilter.ShowDeleteAllBut
  );
  const Dispatch = useDispatch();

  const DeletAllHandler = () => {
    Dispatch(toggleDeleteAll());
    setTimeout(() => {
      Dispatch(toggleDeleteAll());
    }, 100);

    Dispatch(SetShowDeleteAllBut(false));
    toast.success("تمامی فیلتر ها پاک شد");
  };
  const [Options_Page] = useState([
    { value: "0", id: 24, innerHTML: "۲۴", defaultHTML: "۲۴" },
    { value: "1", id: 12, innerHTML: "۱۲" },
    { value: "2", id: 8, innerHTML: "۸" },
  ]);

  return (
    <div className="FilterSection_2 ">
      <div className="hidden lg:block flex-grow-[6] text-[10px] leading-[40px] ">
        تعداد ۴۸ نتیجه از ۲۳۰ دوره طبق جستتجوی شما برای شما یافت شد
      </div>

      <div className="flex-grow-[10] pr-20 pt-3">
        {DeleteButStatus == true ? (
          <Badge
            onClick={DeletAllHandler}
            innerHTML="حذف تمامی فیلتر‌ها"
            className="scale-down-center min-w-[110px] max-w-[140px] border"
          />
        ) : null}
      </div>

      <div className="flex-grow-[1] max-sm:hidden overflow-hidden CostumButtFilter">
        <VaziatButt />
      </div>

      <div className="flex-grow-[1] max-sm:hidden CostumButtFilter min-w-[85px] max-w-[85px]">
        <CustomSelect
          Options={Options_Page}
          type="SimpleSelect"
          IsNumberType
          Id="SelectCardInPage"
          SetFilter={SetItemPerPage}
        />
      </div>

      <div className="flex-grow-[1] max-md:hidden overflow-hidden CostumButtFilter">
        <ViewSelect />
      </div>
    </div>
  );
}

export default Index;
