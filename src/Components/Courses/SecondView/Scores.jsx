import { useState } from "react";

function Scores() {
  const [scores, setScores] = useState([
    {
      id: 1,
      number: "۷۶",
      img: "../../../../public/Image/Course/comment.svg",
      title: "کامنت",
    },
    {
      id: 2,
      number: "۳.۴",
      img: "../../../../public/Image/Course/star.svg",
      title: "رتبه",
    },
    {
      id: 3,
      number: "۱۳۰",
      img: "../../../../public/Image/Course/heart.svg",
      title: "لایک",
    },
    {
      id: 4,
      number: "۱۳۰",
      img: "../../../../public/Image/Course/user.svg",
      title: "کاربر",
    },
  ]);

  return (
    <div>
      <img src="./Image/Course/Group 123.svg" alt="line" />
      <div className="flex justify-between mr-6 my-2">
        {scores.map((item) => {
          return (
            <div className="flex gap-1.5" key={item.id}>
              <span className="text-textMidColor text-xs">{item.number}</span>
              <img src={item.img} alt="comment" />
              <span className="text-textMidColor text-xs">{item.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { Scores };
