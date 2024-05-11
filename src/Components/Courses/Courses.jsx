import "./Style/Style.css";

import { CourseHeader } from "./CourseHeader.jsx";
import { FilterCourse } from "./Filter/FilterCourse.jsx";
import { CourseList } from "./CourseList.jsx";
import { Fragment } from "react";

const Courses = () => {
  return (
    <Fragment>
      <section
        className=" w-[95%]  mt-10 mx-auto px-8 mt-[120px]"
        style={{ direction: "rtl" }}
      >
        <div className="flex flex-col mb-14">
          <CourseHeader />
          <FilterCourse />
          <CourseList />
        </div>
      </section>
    </Fragment>
  );
};

export default Courses;
