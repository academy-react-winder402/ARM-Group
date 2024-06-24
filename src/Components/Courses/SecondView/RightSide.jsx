/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { TopText } from "./TopText.jsx";
import { Statistics } from "./Statistics.jsx";
import { FirstDescription } from "./FirstDescription.jsx";
import { SecondDescription } from "./SecondDescription.jsx";
import { Scores } from "./Scores.jsx";

function RightSide({ CourseObj }) {
  return (
    <div
      className="w-1/2 max-lg:w-3/5 px-8"
      style={{ fontFamily: "IransnsNumber" }}
    >
      <TopText title={CourseObj.title} desc={CourseObj.describe} />
      <Statistics stu={CourseObj.currentRegistrants} />
      <FirstDescription />
      <SecondDescription
        dateDay={CourseObj.lastUpdate}
        // dateMonth={item.dateMonth}
        price={CourseObj.cost}
        // month={item.month}
      />
      <Scores
        numberOfComment={CourseObj.commandCount}
        numberOfLike={CourseObj.likeCount}
        numberOfUser={CourseObj.currentRegistrants}
      />
    </div>
  );
}

export { RightSide };
