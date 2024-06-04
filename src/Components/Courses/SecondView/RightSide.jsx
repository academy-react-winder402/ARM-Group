/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { TopText } from "./TopText.jsx";
import { Statistics } from "./Statistics.jsx";
import { FirstDescription } from "./FirstDescription.jsx";
import { SecondDescription } from "./SecondDescription.jsx";
import { Scores } from "./Scores.jsx";

function RightSide(props) {
  const CurrObj = props.props.CourseObj;
  const [statistics] = useState([
    {
      id: CurrObj.courseId,
      course: CurrObj.title,
      title: CurrObj.technologyList,
      desc: CurrObj.describe,
      numberOfStudent: "۸۳",
      numbers: "۳۴",
      numberInfo: "۱۲",
      numberCourse: "۲۵",
      activeCourse: "۳ ",
      dateDay: "۲۵",
      dateMonth: "۲",
      month: "",
      price: CurrObj.cost,
      numberOfComment: CurrObj.commandCount,
      numberOfScore: CurrObj.courseRate,
      numberOfLike: CurrObj.likeCount,
      numberOfUser: CurrObj.currentRegistrants,
    },
  ]);

  useEffect(() => {
    console.log(props.props.CourseObj);
  }, []);

  return (
    <>
      {statistics.map((item) => {
        return (
          <div className="w-1/2 max-lg:w-3/5 px-8" key={item.id}>
            <TopText course={item.course} title={item.title} desc={item.desc} />
            <Statistics
              numberOfStudent={item.numberOfStudent}
              numbers={item.numbers}
              numberInfo={item.numberInfo}
            />
            <FirstDescription
              numberCourse={item.numberCourse}
              activeCourse={item.activeCourse}
            />
            <SecondDescription
              dateDay={item.dateDay}
              dateMonth={item.dateMonth}
              price={item.price}
              month={item.month}
            />
            <Scores
              numberOfComment={item.numberOfComment}
              numberOfScore={item.numberOfScore}
              numberOfLike={item.numberOfLike}
              numberOfUser={item.numberOfUser}
            />
          </div>
        );
      })}
    </>
  );
}

export { RightSide };
