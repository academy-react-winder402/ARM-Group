import { useState } from "react";
import { TopText } from "./TopText.jsx";
import { Statistics } from "./Statistics.jsx";
import { FirstDescription } from "./FirstDescription.jsx";
import { SecondDescription } from "./SecondDescription.jsx";
import { Scores } from "./Scores.jsx";

function RightSide() {
  // eslint-disable-next-line no-unused-vars
  const [statistics] = useState([
    {
      id: 1,
      course: "دوره تخصصی ریکت",
      title: "عنوان دسته",
      desc: "متن مرتبط با توضیحات دوره لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، ",
      numberOfStudent: "۸۳",
      numbers: "۳۴",
      numberInfo: "۱۲",
      numberCourse: "۲۵",
      activeCourse: "۳ ",
      dateDay: "۲۵",
      dateMonth: "۲",
      month: "اردیبهشت",
      price: "۵۳۰٬۰۰۰",
      numberOfComment: "۷۶",
      numberOfScore: "۳.۴",
      numberOfLike: "۱۳۰",
      numberOfUser: "۱۳۰",
    },
  ]);

  return (
    <>
      {statistics.map((item, key) => {
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
