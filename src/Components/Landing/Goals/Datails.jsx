import { Subject } from "../../Common/Landing/Subject";

export const Deatails = () => {
  return (
    <>
      <div className="w-1/2 text-center m-auto md:pr-20">
        <Subject
          title="اهداف ما در پژوهشگاه سپهر"
          description="تمامی گام‌ها در رسیدن به موفقیت مهم هستند"
        />
      </div>
      <div className="h-[630px]">
        <div className="h-36 flex items-center">
          <img
            className="h-28"
            src="./Image/Landing/Goals01.svg"
            alt="استعداد یابی"
          />
          <h3 className="mt-16 mr-4 text-xl font-light text-textColor dark:text-Dark_TextColor_1">
            استعداد یابی
          </h3>
        </div>
        <div className="h-36 flex gap-56 pt-2">
          <span className="w-1/2 h-16 text-textColor leading-10 dark:text-Dark_TextColor_2">
            یافتن رگه های علاقه و استعداد در دوره های پایلوت استعدادیابی و سپس
            چینش مسیری برای شکوفا نمودن ذوق برنامه سازی در دانش پژوهان
          </span>
          <div className="w-1/2 flex">
            <img
              className="h-28"
              src="./Image/Landing/Goals02.svg"
              alt="راهنمایی و ایجاد انگیزه"
            />
            <p className="mt-16 mr-4 text-xl font-light text-textColor dark:text-Dark_TextColor_1">
              راهنمایی و ایجاد انگیزه
            </p>
          </div>
        </div>
        <div className="h-36 flex gap-56">
          <div className="w-1/2 flex">
            <img
              className="h-28"
              src="./Image/Landing/Goals03.svg"
              alt="آموزش های تخصصی"
            />
            <h3 className="mt-16 mr-4 text-xl font-light text-textColor dark:text-Dark_TextColor_1">
              آموزش های تخصصی
            </h3>
          </div>
          <p className="w-1/2 h-16 text-textColor leading-10 dark:text-Dark_TextColor_2">
            آشنایی با پشته ای تکنولوژیک از زبان های کدنویسی با نگاهی عمل محور
            برای تحریک ذهنیت خلاق در طول فرآیند آموزش
          </p>
        </div>
        <div className="h-36 flex gap-56">
          <p className="w-1/2 h-16 text-textColor leading-10 dark:text-Dark_TextColor_2">
            کارگاه های تخصصی و تکمیلی برای کار با پلتفرم های بازاری مورد اقبال و
            برگزاری تورنمت های تیمی رقابتی برای تقویت روحیه کار تیمی و آشنایی
            عمیق با ابزارهای مدیریت پروژه ، مدیریت سورس تیمی و دورکاری
          </p>
          <div className="w-1/2 flex">
            <img
              className="h-28"
              src="./Image/Landing/Goals04.svg"
              alt="آموزش های تخصصی"
            />
            <h3 className="mt-16 mr-4 text-xl font-light text-textColor dark:text-Dark_TextColor_1">
              آموزش های تخصصی
            </h3>
          </div>
        </div>
        <div className="h-36 mr-60" dir="ltr">
          <p className="w-1/2 h-16 text-textColor leading-10 dark:text-Dark_TextColor_2">
            جلسات تنظیم cv برای ساخت و اشتراک رزومه فنی در بسترهای داخلی و بین
            المللی کاریابی و آماده سازی دانش پژوهان برای شرکت در مصاحبه
          </p>
        </div>
      </div>
    </>
  );
};

{
  /* <>
      <div className="w-1/2 text-center m-auto md:pr-20">
        <h2 className="text-textColor text-2xl font-bold">
          اهداف ما در پژوهشگاه سپهر
        </h2>
        <p className="text-textPcolor mt-10">
          تمامی گام‌ها در رسیدن به موفقیت مهم هستند
        </p>
      </div>
      <div className="h-[630px]">
        <div className="h-36 flex items-center">
          <img
            className="h-28"
            src="./Image/Landing/Goals01.svg"
            alt="استعداد یابی"
          />
          <h3 className="mt-16 mr-4 text-xl font-light text-textColor">
            استعداد یابی
          </h3>
        </div>
        <div className="h-36 flex gap-56 pt-2">
          <span className="w-1/2 h-16 text-textColor leading-10">
            یافتن رگه های علاقه و استعداد در دوره های پایلوت استعدادیابی و سپس
            چینش مسیری برای شکوفا نمودن ذوق برنامه سازی در دانش پژوهان
          </span>
          <div className="w-1/2 flex">
            <img
              className="h-28"
              src="./Image/Landing/Goals02.svg"
              alt="راهنمایی و ایجاد انگیزه"
            />
            <p className="mt-16 mr-4 text-xl font-light text-textColor">
              راهنمایی و ایجاد انگیزه
            </p>
          </div>
        </div>
        <div className="h-36 flex gap-56">
          <div className="w-1/2 flex">
            <img
              className="h-28"
              src="./Image/Landing/Goals03.svg"
              alt="آموزش های تخصصی"
            />
            <h3 className="mt-16 mr-4 text-xl font-light text-textColor">
              آموزش های تخصصی
            </h3>
          </div>
          <p className="w-1/2 h-16 text-textColor leading-10">
            آشنایی با پشته ای تکنولوژیک از زبان های کدنویسی با نگاهی عمل محور
            برای تحریک ذهنیت خلاق در طول فرآیند آموزش
          </p>
        </div>
        <div className="h-36 flex gap-56">
          <p className="w-1/2 h-16 text-textColor leading-10">
            کارگاه های تخصصی و تکمیلی برای کار با پلتفرم های بازاری مورد اقبال و
            برگزاری تورنمت های تیمی رقابتی برای تقویت روحیه کار تیمی و آشنایی
            عمیق با ابزارهای مدیریت پروژه ، مدیریت سورس تیمی و دورکاری
          </p>
          <div className="w-1/2 flex">
            <img
              className="h-28"
              src="./Image/Landing/Goals04.svg"
              alt="آموزش های تخصصی"
            />
            <h3 className="mt-16 mr-4 text-xl font-light text-textColor">
              آموزش های تخصصی
            </h3>
          </div>
        </div>
        <div className="h-36 mr-60" dir="ltr">
          <p className="w-1/2 h-16 text-textColor leading-10">
            جلسات تنظیم cv برای ساخت و اشتراک رزومه فنی در بسترهای داخلی و بین
            المللی کاریابی و آماده سازی دانش پژوهان برای شرکت در مصاحبه
          </p>
        </div>
      </div>
    </> */

  // <>
  //   <div className="h-[700px] grid grid-cols-2 grid-rows-5">
  //     <div className="border col-span-1"></div>
  //     <div className="border"></div>
  //     <div className="border"></div>
  //     <div className="border"></div>
  //     <div className="border"></div>
  //   </div>
  // </>
  <></>;
}
