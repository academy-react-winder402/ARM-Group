/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { CourseListDetail } from "./FirstView/CourseListDetail.jsx";
import { SecondCourseList } from "./SecondView/SecondCourseList.jsx";

/* redux */
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

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
  const CardView = useSelector((state) => state.CourseFilter.CardView);

  /* this was for animations */
  /* useEffect(() => {
    let cardViewer = document.getElementById("CardViewer");

    cardViewer.classList.remove("HideCards");
    cardViewer.classList.add("ShowCards");
  }, [CardView]); */

  const ListViewCards = () => {
    return (
      <>
        <SecondCourseList />
        <SecondCourseList />
        <SecondCourseList />
      </>
    );
  };

  return (
    <div
      id="CardViewer"
      className=" mt-[30px] transition-all duration-[0.5] flex flex-wrap justify-between gap-[40px] h-auto"
    >
      {CardView == "GridView" &&
        courses.map((item, key) => {
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

      {CardView == "ListView" && <ListViewCards />}
    </div>
  );
};
