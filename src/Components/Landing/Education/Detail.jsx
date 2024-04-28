export const Detail = () => {
  return (
    <div className="text-center flex flex-col md:items-end items-center md:justify-end">
      <div
        // style={{ direction: "rtl" }}
        className="mt-12 pr-12 w-1/2 md:text-right flex flex-col"
      >
        <h2 className="text-bold text-2xl -tracking-widest text-textColor">
          دوره آموزش کودکان
        </h2>
        <p className="text-base text-textPcolor mt-8 leading-[40px]">
          نقطه شروع و تلاشی برای پرورش ذهن الگوریتمیگ و قادر به حل مساله در
          کودکان در دوره های پایه حل مساله بازی محور در آکادمی
        </p>
      </div>
      <div
        // style={{ direction: "rtl" }}
        className="mt-12 pr-12 w-1/2 md:text-right flex flex-col"
      >
        <h2 className="text-bold text-2xl -tracking-widest text-textColor">
          دوره آموزش بزرگسالان
        </h2>
        <p className="text-base text-textPcolor mt-8 leading-[40px]">
          آشنایی دوباره به لذت کدنویسی در دوره بزرگسالان و انتقال تجربه ای گام
          به گام و عمل محور برای کار با پشته ای وسیع از زبان ها
        </p>
      </div>
    </div>
  );
};