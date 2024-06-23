import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { GetTeacherById } from "../../Core/Services/api/Teacher/GetTeacherById";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import { ReserveAdd } from "../../Core/Services/api/CourseDetail/GetCourseById";

const Titles = () => {
  const Details = useSelector((state) => state.CourseDetail.CourseObj);
  const [TeacherDetail, setTeacherDetail] = useState([]);
  const [InsertDate, setInsertDate] = useState({});

  const DateGenerator = () => {
    var StartDate = new DateObject();
    var EndDate = new DateObject();
    StartDate.convert(persian);
    EndDate.convert(persian);

    const FirstZeroRemover = (text) => {
      if (text[0] == 0) {
        return text.slice(1);
      } else return text;
    };

    setInsertDate({
      FirstDate:
        StartDate.format("YYYY/MM/") + FirstZeroRemover(StartDate.format("DD")),
      SecondDate:
        EndDate.format("YYYY/MM") + FirstZeroRemover(EndDate.format("DD")),
    });
  };

  const GetTeacher = async (id) => {
    const Teacher = await GetTeacherById(id);
    setTeacherDetail(Teacher);

    DateGenerator();
  };
  useEffect(() => {
    Details.teacherId && GetTeacher(Details.teacherId);
  }, [Details.teacherId]);

  const ReserveHandler = async () => {
    const Resreve = await ReserveAdd(Details.courseId);
    console.log(Resreve);
  };

  return (
    <div className="w-[50%]">
      <h1 className="mt-[1rem] text-right pr-[2rem] text-[30px] text-[#5E5E5E] font-bold">
        {Details.title}
      </h1>
      <p className="mt-[2rem] leading-10 text-right pr-[2rem] mb-[0.5rem] text-[16px] text-[#7E7E7E] font-medium">
        {Details.miniDescribe}
      </p>

      <div className="w-[600px] h-[150px] mt-[80px] mr-5">
        <h1 className="text-[20px] text-[#3d3d3d]">مشخصات دوره</h1>
        <div className="w-full flex items-center h-[80%]">
          <div className="w-[70%] text-[14px] h-[60%] flex flex-wrap">
            <div className="w-[50%] h-[50%] flex  items-center text-[#7E7E7E]">
              <img
                src="../../../public/Image/CourseDetails/status.svg"
                className="w-[20px] h-[20px] ml-[3px] mt-[2px]"
                alt=""
              />
              <span>وضعیت : {Details.courseStatusName}</span>
            </div>
            <div className="w-[50%] h-[50%] flex  items-center text-[#7E7E7E]">
              <img
                src="../../../public/Image/Course/date.png"
                className="w-[20px] h-[20px] ml-[8px] "
                alt=""
              />
              <span
                className="mt-[3px]"
                style={{
                  fontFamily: "IransnsNumber",
                }}
              >
                تاریخ شروع : {InsertDate.FirstDate}
              </span>
            </div>
            <div className="w-[50%] h-[50%] flex  items-center text-[#7E7E7E]">
              <img
                src="../../../public/Image/CourseDetails/level.png"
                className="w-[20px] h-[20px] ml-[3px] mt-[2px]"
                alt=""
              />
              <span>سطح دوره : {Details.courseLevelName}</span>
            </div>
            <div className="w-[50%] h-[50%] flex  items-center text-[#7E7E7E]">
              <img
                src="../../../public/Image/Course/date.png"
                className="w-[20px] h-[20px] ml-[8px]"
                alt=""
              />
              <span
                className="mt-[3px]"
                style={{
                  fontFamily: "IransnsNumber",
                }}
              >
                تاریخ پایان : {InsertDate.FirstDate}
              </span>
            </div>
          </div>
          <div dir="ltr" className="w-[30%] h-full">
            <h1 className="text-[#7E7E7E] mb-2 ml-7 mt-6">
              <span> قیمت : </span>
              <span
                style={{
                  fontFamily: "IransnsNumber",
                }}
              >
                {Intl.NumberFormat({
                  maximumSignificantDigits: 3,
                }).format(Details.cost)}
              </span>
              <span className="text-[10px]"> تومان </span>
            </h1>
            {Details.isCourseReseve == "1" ? (
              <div className="w-[184px] cursor-pointer hover:scale-[1.03] transition-all h-[35px] bg-[#0DA394] text-[#F2F2F2] text-[14px] rounded-[7px] flex justify-center items-center">
                ثبت نام شده
              </div>
            ) : (
              <div
                className="w-[184px] cursor-pointer hover:scale-[1.03] transition-all h-[35px] bg-[#0DA394] text-[#F2F2F2] text-[14px] rounded-[7px] flex justify-center items-center"
                onClick={ReserveHandler}
              >
                ثبت نام در این دوره
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-row flex-nowrap mt-[55px] relative">
        <img
          className="w-[70px] h-[70px] rounded-[50%] absolute shadow-3xl"
          src={TeacherDetail.pictureAddress}
        />
        <h2 className="text-right mt-[45px] mr-[90px] text-[#6E6E6E] text-[17px] whitespace-nowrap font-medium">
          مدرس دوره : {Details.teacherName}
        </h2>
      </div>
    </div>
  );
};

export default Titles;
