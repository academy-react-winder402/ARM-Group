import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { GetTeacherById } from "../../Core/Services/api/Teacher/GetTeacherById";

const Titles = () => {
  const Details = useSelector((state) => state.CourseDetail.CourseObj);
  const [TeacherDetail, setTeacherDetail] = useState([]);

  const GetTeacher = async (id) => {
    const Teacher = await GetTeacherById(id);
    setTeacherDetail(Teacher);
  };
  useEffect(() => {
    Details.teacherId && GetTeacher(Details.teacherId);
  }, [Details.teacherId]);

  return (
    <div className="w-[50%]">
      <h1 className="mt-[1rem] text-right pr-[2rem] text-[30px] text-[#5E5E5E] font-bold">
        {Details.title}
      </h1>
      <p className="mt-[2rem] leading-10 text-right pr-[2rem] mb-[0.5rem] text-[16px] text-[#7E7E7E] font-medium">
        {Details.miniDescribe}
      </p>
      <div className="flex flex-row flex-nowrap mt-[255px] relative">
        <img
          className="w-[70px] h-[70px] rounded-[50%] absolute shadow-3xl"
          src={TeacherDetail.pictureAddress}
        />
        <h2 className="text-right mt-[45px] mr-[70px] text-[#6E6E6E] text-[17px] whitespace-nowrap font-medium">
          مدرس دوره: {Details.teacherName}
        </h2>
      </div>
    </div>
  );
};

export default Titles;
