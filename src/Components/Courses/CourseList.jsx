/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { CourseListDetail } from "./FirstView/CourseListDetail.jsx";
import { SecondCourseList } from "./SecondView/SecondCourseList.jsx";
import { GetByPagination } from "../../Core/Services/api/Course/GetByPagination.js";

/* Skeleton */
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Style from "./Style/Skeleton.module.css";

/* redux */
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

export const CourseList = () => {
  const [SkeletonList] = useState([
    { Skeleton: "" },
    { Skeleton: "" },
    { Skeleton: "" },
    { Skeleton: "" },
    { Skeleton: "" },
    { Skeleton: "" },
    { Skeleton: "" },
    { Skeleton: "" },
  ]);
  const [courses, setCourses] = useState([]);
  const CardView = useSelector((state) => state.CourseFilter.CardView);

  const GetCourses = async () => {
    const Courses = await GetByPagination();
    setCourses(Courses.courseFilterDtos);
    console.log(Courses.courseFilterDtos);
  };

  useEffect(() => {
    GetCourses();
  }, []);

  const GridCourseSkeleton = () => {
    if (courses.length > 0) {
      return courses.map((item) => {
        return (
          <CourseListDetail
            key={item.courseId}
            courseImg={item.tumbImageAddress}
            title={item.title}
            desc={item.describe}
            teacherImg={
              "https://classapi.sepehracademy.ir/\\Pictures\\ProfileImageThumbnail\\photo_2024-05-12_20-55-14_4b0e7469-755c-4e16-8709-7e675c9852bf.jpg"
            }
            teacherName={item.teacherName}
            price={item.cost}
            comment={item.commandCount}
            like={item.likeCount}
            /* Static (Without API): */
            dateDay={12}
            dateMonth={"اردیبهشت"}
            dateYear={1403}
            startDate={2}
          />
        );
      });
    } else {
      return SkeletonList.map((a, key) => (
        <div key={key} className={Style.Skeleton}>
          <Skeleton height={"147px"} duration={0.5} />
          <Skeleton height={"30px"} duration={0.5} />
          <Skeleton height={"70px"} duration={0.5} />
          <Skeleton height={"50px"} duration={0.5} />
          <Skeleton height={"30px"} duration={0.5} />
          <Skeleton height={"30px"} duration={0.5} />
        </div>
      ));
    }
  };

  return (
    <div
      id="CardViewer"
      className=" mt-[30px] transition-all duration-[0.5] flex flex-wrap justify-start gap-[62px] h-auto"
    >
      {CardView == "GridView" && GridCourseSkeleton()}

      {CardView == "ListView" && <SecondCourseList />}
    </div>
  );
};
