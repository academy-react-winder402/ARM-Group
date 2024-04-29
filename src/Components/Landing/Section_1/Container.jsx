function Section_1() {
  return (
    <div
      className="container md:w-[1300px] h-[458px] m-auto mt-[30px] text-right flex flex-col max-md:items-center md:justify-start"
      style={{ direction: "rtl" }}
    >
      <h1 className="text-3xl text-textColor mt-16">آکادمی بحرالعلوم</h1>
      <p className="max-md:px-8 inline-block text-textPcolor text-base md:w-[560px] leading-9 my-12">
        آکادمی جامعه کوچکی است از ذهن های بزرگ برای رشد مراتب تخصص و دانستگی هدف
        تغییر سرنوشت هاست با درک دوباره لذت کدنویسی
      </p>
      <button className="text-base text-center bg-[#E1C564] w-[180px] h-[40px] rounded-lg text-white shadow-lg hover:text-[#343a40] hover:bg-[#339af0]">
        مشاهده دوره ها
      </button>
    </div>
  );
}

export { Section_1 };
