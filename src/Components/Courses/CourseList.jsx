/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { CourseListDetail } from "./FirstView/CourseListDetail.jsx";
import { SecondCourseList } from "./SecondView/SecondCourseList.jsx";
import { GetByPagination } from "../../Core/Services/api/Course/GetByPagination.js";
import toast from "react-hot-toast";

/* Skeleton */
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Style from "./Style/Skeleton.module.css";

/* redux */
import { useSelector, useDispatch } from "react-redux";
import { toggleIsLoading } from "../../Redux/Slices/CourseFilter.jsx";
import slotShouldForwardProp from "@mui/material/styles/slotShouldForwardProp.js";

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
  const dispatch = useDispatch();
  const CardView = useSelector((state) => state.CourseFilter.CardView);
  const SearchQuery = useSelector((state) => state.CourseFilter.Search);
  const CourseLevel = useSelector((state) => state.CourseFilter.CourseLevel);
  const IsLoading = useSelector((state) => state.CourseFilter.IsLoading);

  function PathGenerator() {
    let FilterArr = [];
    let NewPath = "";
    let DefaultPath = "/Home/GetCoursesWithPagination";

    if (SearchQuery != "") {
      let Path = "Query=" + SearchQuery;
      FilterArr.push(Path);
    }
    if (CourseLevel != 0) {
      let Path = "courseLevelId=" + CourseLevel;
      FilterArr.push(Path);
    }

    if (FilterArr.length == 1) {
      NewPath = DefaultPath + "?" + FilterArr[0];
    } else if (FilterArr.length > 1) {
      NewPath = DefaultPath + "?" + FilterArr[0];
      for (let i = 1; i < FilterArr.length; i++) {
        NewPath = NewPath + "&" + FilterArr[i];
      }
    }

    return NewPath != "" ? NewPath : DefaultPath;
  }

  const GetCourses = async (Path) => {
    const Courses = await GetByPagination(Path);
    dispatch(toggleIsLoading());
    setCourses(Courses.courseFilterDtos);
    console.log(Courses.courseFilterDtos);
  };

  useEffect(() => {
    GetCourses("/Home/GetCoursesWithPagination");
  }, []);

  /* this state for prevent running search functions for first time: */
  const [FirstLoading, setFirstLoading] = useState(true);
  useEffect(() => {
    if (FirstLoading) {
      setFirstLoading(false);
    } else {
      dispatch(toggleIsLoading());
      GetCourses(PathGenerator());
    }
  }, [SearchQuery, CourseLevel]);

  const GridCourseSkeleton = () => {
    if (IsLoading && courses.length > 0) {
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
    } else if (courses.length == 0 && SearchQuery != "") {
      return (
        <h1 className="m-auto mt-[100px] mb-[100px] opacity-60 text-[28px]">
          موردی با فیلتر شما یافت نشد
        </h1>
      );
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
