/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { TopText } from "./TopText.jsx";
import { Statistics } from "./Statistics.jsx";
import { FirstDescription } from "./FirstDescription.jsx";
import { SecondDescription } from "./SecondDescription.jsx";
import { Scores } from "./Scores.jsx";

function RightSide({ CourseObj }) {
  return (
    <div className="w-1/2 max-lg:w-3/5 px-8">
      <TopText
        title={CourseObj.title}
        desc={CourseObj.describe}
        tec={CourseObj.technologyList}
      />
      <Statistics stu={CourseObj.currentRegistrants} />
      <FirstDescription />
      <SecondDescription
        dateDay={CourseObj.lastUpdate}
        // dateMonth={item.dateMonth}
        price={CourseObj.cost}
        // month={item.month}
      />
      {/* <Scores
        numberOfComment={item.numberOfComment}
        numberOfScore={item.numberOfScore}
        numberOfLike={item.numberOfLike}
        numberOfUser={item.numberOfUser}
      /> */}
    </div>
  );
}

export { RightSide };
