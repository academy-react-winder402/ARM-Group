export const Details = () => {
  return (
    <div className="ml-40 w-2/3 text-textPcolor h-100 mt-16 flex flex-col item-center md:grid grid-cols-5 grid-rows-2 gap-x-8 gap-y-16">
      <div className="relative bg-[#FAFAF9] w-64 h-16 flex items-center justify-end shadow-md rounded-3xl text-xl pr-4 col-start-2 col-end-4 row-span-1">
        <p>مشاوره</p>
        <img
          className="w-12 h-12 absolute left-6 top-[-16px]"
          src="./Image/Landing/advice.svg"
          alt=""
        />
      </div>
      <div className="relative bg-[#FAFAF9] w-64 h-16 flex items-center justify-end shadow-md rounded-3xl text-xl pr-4 col-start-4 col-end-6 row-span-1">
        <p>آزمون</p>
        <img
          className="w-12 h-12 absolute left-6 top-[-16px]"
          src="./Image/Landing/test.svg"
          alt=""
        />
      </div>
      <div className="relative bg-[#FAFAF9] w-64 h-16 flex items-center justify-end shadow-md rounded-3xl text-xl pr-4 col-start-1 col-end-3 row-span-2">
        <p>دوره های تخصصی</p>
        <img
          className="w-12 h-12 absolute left-6 top-[-16px]"
          src="./Image/Landing/course.svg"
          alt=""
        />
      </div>
      <div className="relative bg-[#FAFAF9] w-64 h-16 flex items-center justify-end shadow-md rounded-3xl text-xl pr-4 col-start-3 col-end-5 row-span-2">
        <p>فرصت‌های شغلی</p>
        <img
          className="w-12 h-12 absolute left-6 top-[-16px]"
          src="./Image/Landing/jobs.svg"
          alt=""
        />
      </div>
    </div>
  );
};
