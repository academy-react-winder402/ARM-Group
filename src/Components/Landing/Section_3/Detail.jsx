import { useState } from "react";

export const Detail = () => {
  //   const [first, setfirst] =
  //     useState()[
  //       {
  //         title: "دوره آموزش کودکان",
  //         desc: `
  //         نقطه شروع و تلاشی برای پرورش ذهن الگوریتمیگ و قادر به حل مساله در کودکان
  //         در دوره های پایه حل مساله بازی محور در آکادمی,
  //         `,
  //       }
  //     ];
  return (
    <div
      // style={{ direction: "rtl" }}
      className="mt-12 pr-12 w-1/2 text-right inline-block"
    >
      <h2 className="text-bold text-2xl -tracking-widest text-textColor">
        دوره آموزش کودکان
      </h2>
      <p className="text-base text-textPcolor mt-8 leading-[40px]">
        نقطه شروع و تلاشی برای پرورش ذهن الگوریتمیگ و قادر به حل مساله در کودکان
        در دوره های پایه حل مساله بازی محور در آکادمی
      </p>
    </div>
  );
};
