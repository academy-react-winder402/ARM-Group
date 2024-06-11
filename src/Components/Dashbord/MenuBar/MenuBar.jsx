import DashboardPanelIcon from "../../../../public/Image/Dashbord/dashboardPanel";
import FileUserIcon from "../../../../public/Image/Dashbord/fileUser";
import FingerPrintIcon from "../../../../public/Image/Dashbord/fingerPrint";
import ELearningIcon from "../../../../public/Image/Dashbord/eLearning";
import NewsPaperIcon from "../../../../public/Image/Dashbord/newsPaper";
import CommentAltIcon from "../../../../public/Image/Dashbord/commentAlt";
import SignOutAltIcon from "../../../../public/Image/Dashbord/signOutAlt";
import { NavLink } from "react-router-dom";
import "./style.css";

function MenuBar() {
  return (
    <div className="bg-white relative w-[212px] h-[469px] rounded-[15px] drop-shadow-[-10px_10px_20px_balck]">
      <div className="w-[200px] h-[100px] m-auto mt-[5px]  relative">
        <div
          className="w-full h-[70px]"
          style={{
            borderRadius: "11px 11px 0px 0px",
            background: "linear-gradient(to right bottom, #C4CDD5, #FFFFFF)",
          }}
        ></div>
        <div
          className="w-[60px] h-[60px] rounded-full absolute right-0 bottom-0"
          style={{
            background: "linear-gradient(to right bottom, #C4CDD5, #FFFFFF)",
          }}
        ></div>
        <span className="text-[13px] text-[#A7A7A7] absolute bottom-0 right-16">
          نام کاربر
        </span>
      </div>

      <ul className="DashbordMenu w-[200px] h-[220px] m-auto mt-[35px]">
        <NavLink
          to={"/Dashbord/User"}
          className={({ isActive }) => [isActive ? "Selected" : ""].join(" ")}
        >
          <span>داشبورد</span> <DashboardPanelIcon />
        </NavLink>
        <NavLink>
          <span>اطلاعات کاربری</span> <FileUserIcon />
        </NavLink>
        <NavLink>
          <span>مدیریت رمز عبور</span> <FingerPrintIcon />
        </NavLink>
        <NavLink
          to={"/Dashbord/Courses"}
          className={({ isActive }) => [isActive ? "Selected" : ""].join(" ")}
        >
          <span>دوره های آموزشی</span> <ELearningIcon />
        </NavLink>
        <NavLink>
          <span>اخبار و مقالات</span> <NewsPaperIcon />
        </NavLink>
        <NavLink
          to={"/Dashbord/Comments"}
          className={({ isActive }) => [isActive ? "Selected" : ""].join(" ")}
        >
          <span>نظرات من</span> <CommentAltIcon />
        </NavLink>
        <NavLink className="SignOut">
          <span>خروج از حساب</span> <SignOutAltIcon />
        </NavLink>
      </ul>
    </div>
  );
}

export default MenuBar;
