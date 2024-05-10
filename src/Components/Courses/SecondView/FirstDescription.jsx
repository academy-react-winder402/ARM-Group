function FirstDescription() {
  return (
    <div className="flex items-center">
      <div className="flex gap-2  w-2/3">
        <img
          src="../../../../public/Image/Course/courseBg.png"
          alt="teacher picture"
          className="w-10 h-10 rounded-lg"
        />
        <div className="flex flex-col justify-between">
          <span className="text-textMidColor text-xs">مدرس دوره</span>
          <span className="text-textPaleColor text-xs">
            تعداد ۲۵ دوره تا کنون و ۳ دوره فعال
          </span>
        </div>
      </div>
      <div className="w-1/3">
        <button className="bg-gradient-to-r from-[#C4CDD5] to-[#91ACCF] px-8 py-2 rounded-lg w-full shadow-3xl text-white font-medium">
          ثبت نام در دوره
        </button>
      </div>
    </div>
  );
}

export { FirstDescription };
