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
      className="xl:mt-[520px] mt-[300px] md:w-[87.5%] mx-auto text-center"
      style={{ direction: "rtl", fontFamily: "IransnsNumber" }}
      data-aos="fade-down"
    >
      <div className="mt-[35px] text-[30px] text-[#5E5E5E] dark:text-Dark_TextColor_1">
        آکادمی بحرالعلوم از دید آمار
      </div>
      <div className="mt-[20px] text-[16px] text-[#7E7E7E] dark:text-Dark_TextColor_2">
        متن مرتبط
      </div>
      <div className="mt-[100px] sm:mt-[140px] flex max-sm:flex-col gap-10 sm:gap-24 flex-nowrap justify-center">
        <div>
          <span className="StNumbers dark:text-Dark_TextColor_1">
            <CountUp duration={5} end={studentCount} />
            {/* {studentCount} */}
          </span>
          <span className="StTexts dark:text-Dark_TextColor_1">دانشجو</span>
        </div>
        <div>
          <span className="StNumbers dark:text-Dark_TextColor_1 ">
            <CountUp duration={5} end={courseCount} />
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
            <CountUp duration={5} end={newsCount} />
          </span>
          <span className="StTexts dark:text-Dark_TextColor_1">اخبار</span>
        </div>
      </div>
    </div>
  );
};
