/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import LikeButt from "./LikeButt";

export const CourseListDetail = ({
  courseImg,
  title,
  desc,
  teacherImg,
  teacherName,
  dateDay,
  dateMonth,
  dateYear,
  levelName,
  price,
  comment,
  like,
  CourseId,

  // FaBeer,
}) => {
  const navigate = useNavigate();

  const ClickHandler = () => {
    navigate("/CoursesDetail/" + CourseId);
  };
  return (
    <div className="w-[250px] p-[5px]  h-[405] flex-none shadow-3xl rounded-[11px] ">
      <div
        className="w-[240px]  h-[147px] object-cover bg-slate-500 rounded-[11px] cursor-pointer transition-all hover:scale-[1.01]"
        onClick={ClickHandler}
      >
        <img className="rounded-xl h-full w-full" src={courseImg} />
      </div>

      <div className="h-auto rounded-xl px-[10px]">
        <h2
          className="truncate py-3 text-sm text-textColor dark:text-[#adb5bd] cursor-pointer transition-all hover:scale-[1.01]"
          onClick={ClickHandler}
        >
          {title}
        </h2>

        <p
          className=" FirsViewP cursor-pointer transition-all hover:scale-[1.01] text-textPaleColor mb-[20px] text-xs pb-1 dark:text-[#868e96]"
          onClick={ClickHandler}
        >
          {desc}
        </p>

        <div className="flex flex-row-reverse gap-2 items-center ml-2 mt-[-6px]">
          <div className="w-10 h-10 bg-slate-400 rounded-full overflow-hidden">
            <img src={teacherImg} />
          </div>
          <p className="text-xs text-textPaleColor">{teacherName}</p>
        </div>

        <div className="flex items-center gap-2 mt-2 text-textSmallSize text-textMidColor tracking-tighter">
          <img className="w-5 h-5 my-1" src="./Image/Course/date.png" />
          <div>
            <span>{dateDay}</span>
            <span> {dateMonth} </span>
            <span>{dateYear}</span>
          </div>
          <div className="flex flex-row-reverse flex-1 pl-2 text-[12px]">
            <span className="font-bold"> {levelName} </span>
            <span className="ml-1"> سطح : </span>
          </div>
        </div>

        <div className="flex justify-between text-textSmallSize text-textMidColor mt-3 mb-2">
          <p>هزینه دوره</p>
          <div className="flex gap-1">
            <span
              style={{
                fontFamily: "IransnsNumber",
              }}
              className="text-[#DC6C6C] text-[16px] leading-[20px]"
            >
              {Intl.NumberFormat({
                maximumSignificantDigits: 3,
              }).format(price)}
            </span>
            <img src="./Image/Course/toman.svg" alt="" />
          </div>
        </div>

        <div className="w-auto h-[2px] bg-gradient-to-r from-[#c4cdd512] via-[#c4cdd5] to-[#c4cdd512] "></div>

        <div
          className="flex justify-evenly  pt-1 text-[11px]"
          style={{
            fontFamily: "IransnsNumber",
          }}
        >
          <div className="flex gap-2 items-center text-textMidColor">
            <span>{comment}</span>
            <svg
              id="comment"
              xmlns="http://www.w3.org/2000/svg"
              width="19.981"
              height="20"
              viewBox="0 0 19.981 20"
            >
              <path
                id="Path_44"
                data-name="Path 44"
                d="M19.98,9.359A10,10,0,1,0,10,19.976h5.813a4.167,4.167,0,0,0,4.162-4.162Zm-1.665,6.454a2.5,2.5,0,0,1-2.5,2.5H10A8.359,8.359,0,0,1,3.78,15.528,8.256,8.256,0,0,1,1.719,9.023,8.361,8.361,0,0,1,8.925,1.729a8.8,8.8,0,0,1,1.082-.068,8.259,8.259,0,0,1,5.31,1.915,8.359,8.359,0,0,1,3,5.862Z"
                transform="translate(0.001 0.024)"
                fill="#8a8a8a"
              />
              <path
                id="Path_45"
                data-name="Path 45"
                d="M8,9h4a1,1,0,0,0,0-2H8A1,1,0,0,0,8,9Z"
                transform="translate(-1.562 -1.259)"
                fill="#8a8a8a"
              />
              <path
                id="Path_46"
                data-name="Path 46"
                d="M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z"
                transform="translate(-2.009 -1.99)"
                fill="#8a8a8a"
              />
              <path
                id="Path_47"
                data-name="Path 47"
                d="M16,15H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z"
                transform="translate(-2.009 -2.721)"
                fill="#8a8a8a"
              />
            </svg>
          </div>

          <div className="flex gap-2 items-center text-textMidColor">
            <span>{comment}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20.658"
              height="20"
              viewBox="0 0 20.658 20"
            >
              <path
                id="star"
                d="M20.522,7.6a2.737,2.737,0,0,0-2.64-1.916H14.12L12.978,2.12a2.778,2.778,0,0,0-5.291,0L6.544,5.681H2.783A2.778,2.778,0,0,0,1.147,10.7L4.208,12.94l-1.164,3.6a2.779,2.779,0,0,0,4.291,3.094l3-2.206,3,2.2a2.778,2.778,0,0,0,4.29-3.092l-1.164-3.6L19.521,10.7a2.735,2.735,0,0,0,1-3.1ZM18.5,9.311l-3.568,2.608a.861.861,0,0,0-.312.961l1.356,4.193a1.056,1.056,0,0,1-1.631,1.175l-3.508-2.583a.861.861,0,0,0-1.019,0L6.314,18.248a1.056,1.056,0,0,1-1.636-1.175l1.36-4.193a.861.861,0,0,0-.312-.961L2.159,9.311A1.056,1.056,0,0,1,2.783,7.4H7.173a.861.861,0,0,0,.82-.6L9.327,2.646a1.056,1.056,0,0,1,2.011,0l1.334,4.159a.861.861,0,0,0,.82.6h4.391a1.056,1.056,0,0,1,.623,1.909Z"
                transform="translate(-0.008 -0.19)"
                fill="#8a8a8a"
              />
            </svg>
          </div>

          <div className="flex gap-2 items-center text-textMidColor">
            <span>{like}</span>
            <LikeButt />
          </div>
        </div>
      </div>
    </div>
  );
};
