/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { LikeDislike } from "../../Common/LikeDissLike/LikeDislike";

/* DateConverter */
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";

function CommentDetail(props) {
  const [InsertDate, setInsertDate] = useState({
    Year: null,
    Month: null,
    day: null,
  });

  const MonthGenerator = (MonthNumber) => {
    switch (MonthNumber) {
      case "01":
        return "فروردین";
      case "02":
        return "اردیبهشت";
      case "03":
        return "خرداد";
      case "04":
        return "تیر";
      case "05":
        return "مرداد";
      case "06":
        return "شهریور";
      case "07":
        return "مهر";
      case "08":
        return "آبان";
      case "09":
        return "آذر";
      case "10":
        return "دی";
      case "11":
        return "بهمن";
      case "12":
        return "اسفند";
    }
  };
  const InsertDateGenerator = () => {
    var date = new DateObject(props.CommentObj.insertDate);
    var Time = props.CommentObj.insertDate;
    date.convert(persian);

    const FirstZeroRemover = (text) => {
      if (text[0] == 0) {
        return text.slice(1);
      } else return text;
    };

    const HowFarGenerator = () => {
      var NowDate = new DateObject();
      NowDate.convert(persian);

      let CurrMonth = Number(FirstZeroRemover(NowDate.format("MM")));
      let InsertMonth = Number(FirstZeroRemover(date.format("MM")));

      let CurrDay = Number(FirstZeroRemover(NowDate.format("DD")));
      let InsertDay = Number(FirstZeroRemover(date.format("DD")));

      let CurrHour = Number(FirstZeroRemover(NowDate.format("hh")));
      let InsertHour = Number(FirstZeroRemover(date.format("hh")));

      if (CurrMonth - InsertMonth > 0) {
        return CurrMonth - InsertMonth + " ماه قبل ";
      } else if (CurrDay - InsertDay > 0) {
        return CurrDay - InsertDay + " روز قبل ";
      } else if (CurrHour - InsertHour > 0) {
        return CurrHour - InsertHour + " ساعت قبل ";
      } else if (CurrHour - InsertHour == 0) {
        return "به تازگی";
      }
    };

    //console.log(CurrMonth);

    setInsertDate({
      Year: date.format("YYYY"),
      Month: date.format("MM"),
      day: FirstZeroRemover(date.format("DD")),
      Hour: FirstZeroRemover(Time.slice(11, 13)),
      Minute: Time.slice(14, 16),
      HowFar: HowFarGenerator(),
    });
  };

  useEffect(() => {
    console.log(props.CommentObj);
    InsertDateGenerator();
  }, []);

  return (
    <div className="flex flex-col gap-4 h-fit mt-8">
      <div className="h-fit flex gap-2">
        <img
          src="../../../../public/Image/ArticleDetail/ArticleDetailBg.png"
          alt="BackGround"
          className="w-[50px] h-[50px] rounded-[8px]"
        />
        <div className="w-full">
          <div className="flex justify-between mt-1 mb-1">
            <div
              className="flex text-textColor text-xs"
              style={{ fontFamily: "IransnsNumber" }}
            >
              <h1 className="font-bold ml-[100px] ">
                {props.CommentObj.title}
              </h1>
              <span className="pl-3">{props.CommentObj.author}</span>
              <span>|</span>
              <span className="px-3">
                {InsertDate.day} {MonthGenerator(InsertDate.Month)}
                {InsertDate.Year}
              </span>
              <span>|</span>
              <span className="px-3">
                ساعت {InsertDate.Minute} : {InsertDate.Hour}
              </span>
              <span>|</span>
              <span className="pr-3">{InsertDate.HowFar}</span>
            </div>
            <LikeDislike
              likeCount={props.CommentObj.likeCount}
              disslikeCount={props.CommentObj.disslikeCount}
              Id={props.CommentObj.id}
            />
          </div>
          <p className="text-xs text-textColor leading-5">
            {props.CommentObj.describe}
          </p>
        </div>
      </div>
      <div className="h-fit border-b border-[#C2C2C2] pr-12 flex justify-between items-center pb-2">
        <div className="cursor-pointer hover:bg-[#dadada] w-fit px-5 h-[25px] flex justify-center items-center text-[11px] text-textColor bg-[#e9ecef] rounded-[15px] ">
          {props.CommentObj.acceptReplysCount > 0 ? (
            <>مشاهده پاسخ ها ({props.CommentObj.acceptReplysCount})</>
          ) : (
            <>بدون پاسخ</>
          )}
        </div>
        <div className="w-[100px] cursor-pointer hover:bg-[#dadada] transition-all h-[25px] flex justify-center gap-2 items-center text-[11px] text-textColor bg-[#e9ecef] rounded-[15px]">
          <span>پاسخ دادن</span>
          <img
            src="../../../../public/Image/ArticleDetail/redo.png"
            alt=""
            className="w-[15px] h-[13px]"
          />
        </div>
      </div>
    </div>
  );
}

export { CommentDetail };
