import ViewSelect from "./ViewSelect";
import CourseInPageSelect from "./CourseInPageSelect";
import VaziatButt from "./VaziatButt";
import DeleteAllButt from "./DeleteAllButt";

function index() {
  return (
    <div className=" FilterSecton_2 ">
      <div className="flex-grow-[6] text-[10px]  leading-[40px] ">
        تعداد ۴۸ نتیجه از ۲۳۰ دوره طبق جستتجوی شما برای شما یافت شد
      </div>
      <div className="flex-grow-[10]">
        <DeleteAllButt />
      </div>
      <div className="flex-grow-[1] CostumButtFilter">
        <VaziatButt />
      </div>
      <div className="flex-grow-[1] CostumButtFilter min-w-[85px] max-w-[85px]">
        <CourseInPageSelect />
      </div>
      <div className="flex-grow-[1] CostumButtFilter">
        <ViewSelect />
      </div>
    </div>
  );
}

export default index;
