// import { useState } from "react";
// import { RangeSlider } from "./RangeSlider.jsx";

export function FilterCourse() {
  //   const [value, setValue] = useState("");

  return (
    <div className="mt-5 pl-4 pb-2 rounded-lg shadow-3xl flex flex-row-reverse gap-4">
      <div className="flex flex-col">
        <div className="flex justify-between gap-24">
          <div className="text-sm py-2">
            <span>حداقل: </span>
            <span className="text-xs">100,000</span>
          </div>
          <div className="text-sm py-2">
            <span>حداکثر: </span>
            <span className="text-xs">400,000</span>
          </div>
        </div>
        <input
          type="range"
          className="flex justify-center h-4"
          min="0"
          max="100"
          step="10"
        />
        {/* <RangeSlider /> */}
      </div>
      <div className="text-sm flex items-center">قیمت :</div>
    </div>
  );
}
