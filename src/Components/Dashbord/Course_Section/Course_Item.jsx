/* eslint-disable react/prop-types */
import OverviewIcon from "../../../../public/Image/Dashbord/Comments/overview";
import ArrowSquareIcon from "../../../../public/Image/Dashbord/Comments/arrowSquare";
import TrashIcon from "../../../../public/Image/Dashbord/Comments/trash";

/* Statuses */
import InProgress from "./Status/InProgress";
import NotEvenStart from "./Status/NotEvenStart";
import Ended from "./Status/Ended";

function Course_Item({ CourseObj }) {
  const CurrStatus = () => {
    if (CourseObj.Status == "Ended") {
      return <Ended />;
    } else if (CourseObj.Status == "NotEvenStart") {
      return <NotEvenStart />;
    } else if (CourseObj.Status == "InProgress") {
      return <InProgress />;
    } else {
      return <span>یافت نشد</span>;
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

        <div className="w-[126px] h-[58px] text-[#565656]">
          <span className="block text-[17px] w-[146px] mb-3 ">
            {CourseObj.Onvan}
          </span>
          <span className=" block text-[15px]">{CourseObj.Category}</span>
        </div>
      </span>
      <span className="w-[145px]"> {CourseObj.Ostad} </span>
      <span className="w-[95px]"> {CourseObj.Date} </span>
      <span className="w-[110px]">{CurrStatus()}</span>
      <span className="w-[145px] leading-[80px]">
        <span className="text-[#FF2055] ml-1"> {CourseObj.Price} </span>
        تومان
      </span>
      <span className="w-[100px] justify-between">
        <ArrowSquareIcon />
        <OverviewIcon />
        <TrashIcon />
      </span>
    </div>
  );
}

export default Course_Item;
