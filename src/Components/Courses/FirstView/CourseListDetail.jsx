/* eslint-disable react/prop-types */

export const CourseListDetail = ({
  courseImg,
  title,
  desc,
  teacherImg,
  dateDay,
  dateMonth,
  dateYear,
  startDate,
  price,
  comment,
  like,
  // FaBeer,
}) => {
  return (
    <div className="w-[250px] p-[5px]  h-[405] flex-none shadow-3xl rounded-[11px] cursor-pointer">
      <div className="w-[240px]  h-[147px] object-cover bg-slate-500 rounded-[11px]">
        <img className="rounded-xl h-full w-full" src={courseImg} alt="image" />
      </div>
      <div className="h-auto rounded-xl px-[10px]">
        <h2 className="py-3 text-sm text-textColor dark:text-[#adb5bd]">
          {title}
        </h2>

        <p className="text-textPaleColor mb-[10px] text-xs pb-1 dark:text-[#868e96]">
          {desc}
        </p>

        <div className="flex flex-row-reverse gap-2 items-center ml-2 mt-[-6px]">
          <div className="w-10 h-10 bg-slate-400 rounded-full overflow-hidden">
            <img src={teacherImg} alt="teacher" />
          </div>
          <p className="text-xs text-textPaleColor">مدرس دوره</p>
        </div>

        <div className="flex items-center gap-2 mt-2 text-textSmallSize text-textMidColor tracking-tighter">
          <img className="w-5 h-5 my-1" src="./Image/Course/date.png" />
          <div>
            <span>{dateDay}</span>
            <span> {dateMonth} </span>
            <span>{dateYear}</span>
          </div>
          <div className="flex flex-row-reverse flex-1 pl-2">
            <span className="mr-1"> ماه تا شروع </span>
            <span> {startDate} </span>
          </div>
        </div>

        <div className="flex justify-between text-textSmallSize text-textMidColor mt-3 mb-2">
          <p>هزینه دوره</p>
          <div className="flex gap-1">
            <span className="text-[#DC6C6C]">{price}</span>{" "}
            <img src="./Image/Course/toman.svg" alt="" />
          </div>
        </div>

        <div className="w-auto h-[1px] bg-gradient-to-r from-[#c4cdd512] via-[#c4cdd5] to-[#c4cdd512] "></div>

        <div className="flex justify-evenly pt-2">
          <div className="flex gap-1 items-center text-textMidColor">
            <span className="text-xs">{comment}</span>
            <img className="w-5 h-5" src="./Image/Course/comment.png" />
          </div>
          <div className="flex gap-1 items-center text-textMidColor">
            <span className="text-xs">{like}</span>
            <img className="w-5 h-5" src="./Image/Course/heart.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
