import { useState } from "react";
import { TopText } from "./TopText.jsx";
import { Statistics } from "./Statistics.jsx";
import { FirstDescription } from "./FirstDescription.jsx";
import { SecondDescription } from "./SecondDescription.jsx";
import { Scores } from "./Scores.jsx";

function RightSide() {
  // eslint-disable-next-line no-unused-vars
  const [statistics, setStatistics] = useState([
    { id: 1, number: "۸۳", title: "دانشجو تا کنون" },
    { id: 2, number: "۳۴", title: "تعداد برگذاری" },
    { id: 3, number: "۱۲", title: "اطلاعات مهم" },
  ]);

  return (
    <div className="w-1/2 max-lg:w-3/5 px-8">
      <TopText />
      <Statistics statistics={statistics} />
      <FirstDescription />
      <SecondDescription />
      <Scores />
    </div>
  );
}

export { RightSide };
