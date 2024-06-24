/* eslint-disable react/prop-types */
import OverviewIcon from "../../../../public/Image/Dashbord/Comments/overview";
import ArrowSquareIcon from "../../../../public/Image/Dashbord/Comments/arrowSquare";
import TrashIcon from "../../../../public/Image/Dashbord/Comments/trash";

import DateGenerator from "../../../Core/Utils/DateGenerator";

/* Statuses */
import InProgress from "./Status/InProgress";
import NotEvenStart from "./Status/NotEvenStart";
import Ended from "./Status/Ended";

function Course_Item({ CourseObj }) {
  const CurrStatus = () => {
    if (CourseObj.accept) {
      return <InProgress />;
    } else {
      return <Ended />;
    }
  };

  return (
    <div>
      <span className="w-[240px]">
        <div
          className="w-[60px] h-[60px] rounded-[5px]"
          style={{
            background: "linear-gradient(to right bottom, #C4CDD5, #FFFFFF)",
          }}
        ></div>

        <div className="w-[126px] text-[#565656]">
          <span className="block text-[17px] w-[150px]  truncate">
            {CourseObj.courseName}
          </span>
        </div>
      </span>
      <span className="w-[195px]"> {CourseObj.studentName} </span>
      <span className="w-[230px]">
        {DateGenerator(CourseObj.reserverDate)}{" "}
      </span>
      <span className="w-[110px]">{CurrStatus()}</span>
    </div>
  );
}

export default Course_Item;
