import CountUp from "react-countup";
import PN from "persian-number";
import { LandingReportApi } from "../../../Core/Services/api/LandingReport";
import { useEffect, useState } from "react";

export const Statistics = () => {
  const [techerCount, setTecherCount] = useState();
  const [studentCount, setStudentCount] = useState();
  const [courseCount, setCourseCount] = useState();
  const [newsCount, setNewsCount] = useState();

  const getReport = async () => {
    const report = await LandingReportApi();
    setTecherCount(report.teacherCount);
    setStudentCount(report.studentCount);
    setCourseCount(report.courseCount);
    setNewsCount(report.newsCount);
    console.log(report);
  };

  useEffect(() => {
    getReport();
  }, []);

  return (
    <div
      className="mt-[480px] h-[690px] md:w-[87.5%] mx-auto text-center"
      style={{ direction: "rtl" }}
      data-aos="fade-down"
    >
      <div className="mt-[35px] text-[30px] text-[#5E5E5E] dark:text-Dark_TextColor_1">
        دوره های آموزشی ما
      </div>
      <div className="mt-[20px] text-[16px] text-[#7E7E7E] dark:text-Dark_TextColor_2">
        متن مرتبط
      </div>
      <div className="mt-[140px] flex flex-nowrap justify-center gap-[100px]">
        <div>
          <span className="StNumbers dark:text-Dark_TextColor_1">
            <CountUp duration={5} end={studentCount} />
            {/* {studentCount} */}
          </span>
          <span className="StTexts dark:text-Dark_TextColor_1">دانشجو</span>
        </div>
        <div>
          <span className="StNumbers dark:text-Dark_TextColor_1 ">
            {courseCount}
          </span>
          <span className="StTexts dark:text-Dark_TextColor_1">
            دوره آموزشی
          </span>
        </div>
        <div>
          <span className="StNumbers dark:text-Dark_TextColor_1">
            <CountUp duration={5} end={techerCount} />
          </span>
          <span className="StTexts dark:text-Dark_TextColor_1">استاد</span>
        </div>
        <div>
          <span className="StNumbers dark:text-Dark_TextColor_1">
            {newsCount}
          </span>
          <span className="StTexts dark:text-Dark_TextColor_1">اخبار</span>
        </div>
      </div>
    </div>
  );
};
