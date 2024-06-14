// import { DetailsChild } from "./DetailsChild.jsx";

export const Details = () => {
  return (
    <div className="max-md:mx-auto md:ml-40 w-2/3 text-textPcolor h-100 mt-16 flex flex-col items-center md:grid grid-cols-5 grid-rows-2 gap-x-2 gap-y-10 md:gap-y-16 mb-32">
      <div className="relative bg-[#FAFAF9] dark:bg-[#343a40] w-[90%] h-16 flex items-center justify-end shadow-md rounded-3xl xl:text-xl lg:text-lg pr-4 col-start-2 col-end-4 row-span-1 cursor-pointer">
        <p className="dark:text-[#868e96]">مشاوره</p>
        <img
          className="dark:hidden lg:w-[52px] lg:h-[52px] h-10 w-10 absolute left-6 top-[-16px]"
          src="./Image/Landing/advice.svg"
          alt="مشاوره"
        />
      </div>
      <div className="relative bg-[#FAFAF9] dark:bg-[#343a40] w-[90%] h-16 flex items-center justify-end shadow-md rounded-3xl xl:text-xl lg:text-lg pr-4 col-start-4 col-end-6 row-span-1 cursor-pointer">
        <p className="dark:text-[#868e96]">آزمون</p>
        <img
          className="dark:hidden lg:w-[52px] lg:h-[52px] h-10 w-10 absolute left-6 top-[-16px]"
          src="./Image/Landing/test.svg"
          alt="آزمون"
        />
      </div>
      <div className="relative bg-[#FAFAF9] dark:bg-[#343a40] w-[90%] h-16 flex items-center justify-end shadow-md rounded-3xl xl:text-xl lg:text-lg pr-4 col-start-1 col-end-3 row-span-2 cursor-pointer">
        <p className="dark:text-[#868e96]">دوره های تخصصی</p>
        <img
          className="dark:hidden lg:w-[52px] lg:h-[52px] h-10 w-10 absolute left-6 top-[-16px]"
          src="./Image/Landing/course.svg"
          alt="دوره های تخصصی"
        />
      </div>
      <div className="relative bg-[#FAFAF9] dark:bg-[#343a40]  w-[90%] h-16 flex items-center justify-end shadow-md rounded-3xl xl:text-xl lg:text-lg pr-4 col-start-3 col-end-5 row-span-2 cursor-pointer">
        <p className="dark:text-[#868e96]">فرصت‌های شغلی</p>
        <img
          className="dark:hidden lg:w-[52px] lg:h-[52px] h-10 w-10 absolute left-6 top-[-16px]"
          src="./Image/Landing/jobs.svg"
          alt="فرصت‌های شغلی"
        />
      </div>
    </div>
  );
};
