/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { CourseListDetail } from "./FirstView/CourseListDetail.jsx";
import { SecondCourseList } from "./SecondView/SecondCourseList.jsx";

// import { FaBeer } from "react-icons/fa";
// import { ReactComponent as Svg } from "./icon.svg";

export const CourseList = () => {
  // eslint-disable-next-line no-unused-vars
  const [courses, setCourses] = useState([
    {
      courseImg: "./Image/Course/react.jpg",
      title: "دوره تخصصی ریکت",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ",
      teacherImg: "./Image/Course/teacher.png",
      dateDay: 10,
      dateMonth: "اردیبهشت",
      dateYear: 1401,
      startDate: 4,
      price: "1,500,000",
      comment: 68,
      like: 190,
      // FaBeer: { FaBeer },
    },
    {
      courseImg: "./Image/Course/react.jpg",
      title: "دوره تخصصی ریکت",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ",
      teacherImg: "./Image/Course/teacher.png",
      dateDay: 10,
      dateMonth: "اردیبهشت",
      dateYear: 1401,
      startDate: 4,
      price: "1,500,000",
      comment: 68,
      like: 190,
      // FaBeer: { FaBeer },
    },
    {
      courseImg: "./Image/Course/react.jpg",
      title: "دوره تخصصی ریکت",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ",
      teacherImg: "./Image/Course/teacher.png",
      dateDay: 10,
      dateMonth: "اردیبهشت",
      dateYear: 1401,
      startDate: 4,
      price: "1,500,000",
      comment: 68,
      like: 190,
      // FaBeer: { FaBeer },
    },
    {
      courseImg: "./Image/Course/react.jpg",
      title: "دوره تخصصی ریکت",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ",
      teacherImg: "./Image/Course/teacher.png",
      dateDay: 10,
      dateMonth: "اردیبهشت",
      dateYear: 1401,
      startDate: 4,
      price: "1,500,000",
      comment: 68,
      like: 190,
      // FaBeer: { FaBeer },
    },
    {
      courseImg: "./Image/Course/react.jpg",
      title: "دوره تخصصی ریکت",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ",
      teacherImg: "./Image/Course/teacher.png",
      dateDay: 10,
      dateMonth: "اردیبهشت",
      dateYear: 1401,
      startDate: 4,
      price: "1,500,000",
      comment: 68,
      like: 190,
      // FaBeer: { FaBeer },
    },
    {
      courseImg: "./Image/Course/react.jpg",
      title: "دوره تخصصی ریکت",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ",
      teacherImg: "./Image/Course/teacher.png",
      dateDay: 10,
      dateMonth: "اردیبهشت",
      dateYear: 1401,
      startDate: 4,
      price: "1,500,000",
      comment: 68,
      like: 190,
      // FaBeer: { FaBeer },
    },
    {
      courseImg: "./Image/Course/react.jpg",
      title: "دوره تخصصی ریکت",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ",
      teacherImg: "./Image/Course/teacher.png",
      dateDay: 10,
      dateMonth: "اردیبهشت",
      dateYear: 1401,
      startDate: 4,
      price: "1,500,000",
      comment: 68,
      like: 190,
      // FaBeer: { FaBeer },
    },
    {
      courseImg: "./Image/Course/react.jpg",
      title: "دوره تخصصی ریکت",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ",
      teacherImg: "./Image/Course/teacher.png",
      dateDay: 10,
      dateMonth: "اردیبهشت",
      dateYear: 1401,
      startDate: 4,
      price: "1,500,000",
      comment: 68,
      like: 190,
      // FaBeer: { FaBeer },
    },
  ]);
  return (
    <div className="mt-[30px] flex flex-wrap max-md:justify-center justify-between  gap-10 h-auto">
      {courses.map((item, key) => {
        return (
          <CourseListDetail
            key={key}
            courseImg={item.courseImg}
            title={item.title}
            desc={item.desc}
            teacherImg={item.teacherImg}
            dateDay={item.dateDay}
            dateMonth={item.dateMonth}
            dateYear={item.dateYear}
            startDate={item.startDate}
            price={item.price}
            comment={item.comment}
            like={item.like}
            // FaBeer={FaBeer}
          />
        );
      })}

      <SecondCourseList />
    </div>
  );
};
