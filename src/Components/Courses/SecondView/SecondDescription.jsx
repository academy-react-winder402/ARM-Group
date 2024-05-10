function SecondDescription() {
  return (
    <div className="flex justify-between items-center my-5 gap-10">
      <div className="flex justify-around items-center w-[60%]">
        <div className="flex items-center gap-3">
          <img src="./Image/Course/date.png" alt="date" className="w-6 h-6" />

          <span className="text-xs text-textMidColor"> ۲۵ اردیبهشت ۱۴۰۱</span>
        </div>
        <span className="text-xs text-textMidColor"> ۲ ماه تا شروع</span>
      </div>
      <div className="flex justify-evenly items-center w-[40%]">
        <span className="text-textMidColor text-xs w-1/2">هزینه دوره</span>
        <div className="flex justify-around items-center w-1/2">
          <span className="text-[#DC6C6C]">۵۳۰٬۰۰۰</span>
          <img src="./Image/Course/toman.svg" alt="toman" className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}

export { SecondDescription };
