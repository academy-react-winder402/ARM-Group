/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { CourseListDetail } from "./FirstView/CourseListDetail.jsx";
import { SecondCourseList } from "./SecondView/SecondCourseList.jsx";
import { GetByPagination } from "../../Core/Services/api/Course/GetByPagination.js";
import DefualtPagination from "../Common/Pagination/index.jsx";

import toast from "react-hot-toast";

/* Skeleton */
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Style from "./Style/Skeleton.module.css";

/* redux */
import { useSelector, useDispatch } from "react-redux";
import {
  SetShowDeleteAllBut,
  SetItemsCount,
  SetPageNumber,
} from "../../Redux/Slices/CourseFilter.jsx";

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
  const [NothingFound, setNothingFound] = useState(false);

  const dispatch = useDispatch();
  const CardView = useSelector((state) => state.CourseFilter.CardView);
  const SearchQuery = useSelector((state) => state.CourseFilter.Search);
  const CourseLevel = useSelector((state) => state.CourseFilter.CourseLevel);
  const PriceFilter = useSelector((state) => state.CourseFilter.PriceFilter);
  const Teacher = useSelector((state) => state.CourseFilter.Teacher);
  const Sorting = useSelector((state) => state.CourseFilter.Sorting);
  const Category = useSelector((state) => state.CourseFilter.Category);
  const Type = useSelector((state) => state.CourseFilter.Type);

  /* Paginations: */
  const PerPageCount = useSelector((state) => state.CourseFilter.ItemPerPage);
  const PageNumber = useSelector((state) => state.CourseFilter.PageNumber);
  const ItemsCount = useSelector((state) => state.CourseFilter.ItemsCount);

  function PathGenerator() {
    let FilterArr = [];
    let NewPath = "";
    let DefaultPath = "/Home/GetCoursesWithPagination";

    const NewPathGenerator = () => {
      NewPath = "";
      if (FilterArr.length == 1) {
        NewPath = DefaultPath + "?" + FilterArr[0];
      } else if (FilterArr.length > 1) {
        NewPath = DefaultPath + "?" + FilterArr[0];
        for (let i = 1; i < FilterArr.length; i++) {
          NewPath = NewPath + "&" + FilterArr[i];
        }
      } else {
        NewPath = DefaultPath;
      }
    };

    if (SearchQuery != "") {
      let Path = "Query=" + SearchQuery;
      FilterArr.push(Path);
    }
    if (CourseLevel != 0) {
      let Path = "courseLevelId=" + CourseLevel;
      FilterArr.push(Path);
    }
    if (Teacher != 0) {
      let Path = "TeacherId=" + Teacher;
      FilterArr.push(Path);
    }
    if (Sorting != "") {
      let Path = "SortType=" + Sorting;
      FilterArr.push(Path);
    }
    if (Type != 0) {
      let Path = "CourseTypeId=" + Type;
      FilterArr.push(Path);
    }
    if (Category.length > 0) {
      let Path = "ListTech=" + Category[0];
      if (Category.length > 1) {
        for (let i = 1; i < Category.length; i++) {
          Path = Path + "," + Category[i];
        }
      }
      FilterArr.push(Path);
    }
    if (PriceFilter.length > 0) {
      let Path1 = "CostDown=" + PriceFilter[0];
      let Path2 = "CostUp=" + PriceFilter[1];
      FilterArr.push(Path1, Path2);
    }

    /* Now Getting Filters items count For Pagination */
    NewPathGenerator();
    GetCourseForPagination(NewPath);

    if (PerPageCount > 0) {
      let Path = "RowsOfPage=" + PerPageCount;
      FilterArr.push(Path);
    }
    if (PageNumber > 0) {
      let Path = "PageNumber=" + PageNumber;
      FilterArr.push(Path);
    }
    /* Now We Make New Path with Pagination */
    NewPathGenerator();
    //console.log("before pagination = " + NewPath);

    //console.log(NewPath);
    /* Visible Delete All delete Button: */
    FilterArr.length > 0 && dispatch(SetShowDeleteAllBut(true));

    //console.log(NewPath);
    return NewPath != "" ? NewPath : DefaultPath;
  }

  const GetCourses = async (Path) => {
    setCourses([]);
    const Courses = await GetByPagination(Path);

    setTimeout(() => {
      setCourses(Courses.courseFilterDtos);

      if (Courses.courseFilterDtos.length == 0) {
        setNothingFound(true);
      } else setNothingFound(false);
    }, 500);
  };

  const GetCourseForPagination = async (path) => {
    const Courses = await GetByPagination(path);
    /* Set All Items Count */
    dispatch(SetItemsCount(Courses.courseFilterDtos.length));
  };

  const GridCourseSkeleton = () => {
    let ShowingStatus;

    if (courses.length == 0) ShowingStatus = "Skeleton";
    if (courses.length > 0) ShowingStatus = "Products";
    if (courses.length == 0 && NothingFound == true) ShowingStatus = "NotFound";

    switch (ShowingStatus) {
      case "Products":
        return courses.map((item) => {
          return (
            <CourseListDetail
              key={item.courseId}
              CourseId={item.courseId}
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
              levelName={item.levelName}
              /* Static (Without API): */
              dateDay={12}
              dateMonth={"اردیبهشت"}
              dateYear={1403}
            />
          );
        });
      case "Skeleton":
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
      case "NotFound":
        return (
          <h1 className="m-auto mt-[100px] mb-[100px] opacity-60 text-[28px]">
            موردی با فیلتر شما یافت نشد
          </h1>
        );
    }
  };

  useEffect(() => {
    /* Getting All Items for Pagination */
    GetCourseForPagination("/Home/GetCoursesWithPagination");

    GetCourses("/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=24");
  }, []);
  /* this state for prevent running search functions for first time: */
  const [FirstLoading, setFirstLoading] = useState(true);
  useEffect(() => {
    if (FirstLoading) {
      setFirstLoading(false);
    } else {
      dispatch(SetPageNumber(1));

      /* this filter with pagination */
      GetCourses(PathGenerator());
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [SearchQuery, CourseLevel, PriceFilter, Teacher, Sorting, Category, Type]);
  useEffect(() => {
    if (FirstLoading) {
      setFirstLoading(false);
    } else {
      /* this filter with pagination */
      GetCourses(PathGenerator());

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [PageNumber, PerPageCount]);

  return (
    <>
      <div
        id="CardViewer"
        className=" mt-[30px] transition-all duration-[0.5] flex flex-wrap justify-start gap-[62px] h-auto"
      >
        {CardView == "GridView" ? GridCourseSkeleton() : null}

        {CardView == "ListView" && <SecondCourseList />}
      </div>

      {ItemsCount ? (
        <DefualtPagination
          TotalCount={ItemsCount}
          PerPageCount={PerPageCount}
          SetPageNumber={SetPageNumber}
          PageNumberState={PageNumber}
        />
      ) : null}
    </>
  );
};
