function Section_2() {
  return (
    <div className="cotainer border-black w-[1300px] h-[458px] m-auto mt-[120px] text-center">
      <h2 className="text-3xl text-textColor pt-12">خدمات پژوهشگاه</h2>
      <p className="text-base mt-8 text-textPcolor">
        همه آنچه برای طی کردن مسیر پیشرفت نیاز دارید
      </p>
      <div className="ml-60 w-100 text-textPcolor h-100 mt-16 flex gap-24">
        <div className="relative w-64 h-16 flex items-center justify-end shadow-md rounded-3xl text-xl pr-4">
          <p>مشاوره</p>
          <img
            className="w-12 h-12 absolute left-6 top-[-16px]"
            src="./Image/Landing/advice.svg"
            alt=""
          />
        </div>
        <div className="relative w-64 h-16 flex items-center justify-end shadow-md rounded-3xl text-xl pr-4">
          <p>آزمون</p>
          <img
            className="w-12 h-12 absolute left-6 top-[-16px]"
            src="./Image/Landing/test.svg"
            alt=""
          />
        </div>
      </div>
      <div className="ml-20 w-100 text-textPcolor h-100 mt-12 flex gap-24">
        <div className="relative w-64 h-16 flex items-center justify-end shadow-md rounded-3xl text-xl pr-4">
          <p>دوره های تخصصی</p>
          <img
            className="w-12 h-12 absolute left-6 top-[-16px]"
            src="./Image/Landing/course.svg"
            alt=""
          />
        </div>
        <div className="relative w-64 h-16 flex items-center justify-end shadow-md rounded-3xl text-xl pr-4">
          <p>فرصت‌های شغلی</p>
          <img
            className="w-12 h-12 absolute left-6 top-[-16px]"
            src="./Image/Landing/jobs.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export { Section_2 };
