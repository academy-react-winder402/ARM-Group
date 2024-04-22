import { NavLink } from "react-router-dom";

export const HeaderSection2 = () => {
  return (
    <div className="flex justify-center flex-nowrap gap-8 text-[14px] mt-[15px] max-md:hidden leading-6">
      <NavLink
        to={"/Home"}
        className={({ isActive }) => [isActive ? "SelectedMenu" : ""].join(" ")}
      >
        خانه
      </NavLink>

      <NavLink
        to={"/Courses"}
        className={({ isActive }) => [isActive ? "SelectedMenu" : ""].join(" ")}
      >
        دوره ها
      </NavLink>

      <span className="cursor-pointer">مقالات</span>
      <span className="cursor-pointer"> درباره ما</span>
      <span className="cursor-pointer">تماس با ما</span>
    </div>
  );
};
