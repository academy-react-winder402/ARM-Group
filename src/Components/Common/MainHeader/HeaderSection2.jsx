import { useState } from "react";
import { NavLink } from "react-router-dom";

export const HeaderSection2 = () => {
  const [navlink] = useState([
    { to: "/Home", title: "خانه" },
    { to: "/Courses", title: "دوره ها" },
    { to: "/Article", title: "مقالات" },
  ]);
  return (
    <div className="w-[400px] flex justify-end flex-nowrap gap-8 text-[14px] mt-[15px] max-md:hidden leading-6">
      {navlink.map((el, key) => (
        <NavLink
          className={({ isActive }) =>
            [isActive ? "SelectedMenu" : ""].join(" ")
          }
          key={key}
          to={el.to}
        >
          {el.title}
        </NavLink>
      ))}

      <span className="cursor-pointer"> درباره ما</span>
      {/* <span className="cursor-pointer">تماس با ما</span> */}
    </div>
  );
};
