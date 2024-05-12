import { RightSide } from "./RightSide.jsx";
import { LeftSide } from "./LeftSide.jsx";

function SecondCourseList() {
  return (
    <div
      className=" relative m-auto w-[90%] max-xl:w-[100%] rounded-xl h-[380px] mt-[30px] flex shadow-3xl"
      dir="rtl"
    >
      <RightSide />

      <div className="absolute right-1/2 max-lg:right-[60%] translate-x-1/2 top-6 rounded-xl w-16 h-7 bg-[#F5F5F4] shadow-3xl">
        <span className="flex justify-center translate-y-1/2 text-[#DEDEDE] text-xs">
          badge
        </span>
      </div>

      <LeftSide />
    </div>
  );
}

export { SecondCourseList };
