import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function HambergurMenu() {
  const [navlink] = useState([
    { to: "/Home", title: "خانه" },
    { to: "/Courses", title: "دوره ها" },
    { to: "/Article", title: "مقالات" },
  ]);
  const hamburgerMenu = () => {
    const el = document.getElementById("hamburgerMenu");
    el.classList.toggle("hide");
    el.classList.toggle("show");
  };

  return (
    <div className="hidden max-md:flex justify-center items-center">
      <div onClick={hamburgerMenu}>
        <Hamburger size={22} />
      </div>
      <div
        id="hamburgerMenu"
        className="hide bg-[#e9ecef] transition-all duration-700 dark:bg-[#212529] h-[700px] w-full absolute top-[54px] right-0 z-10 rounded-b-md shadow-md "
      >
        <div className="h-full transition-all duration-700 delay-300 w-full flex items-center pt-28 gap-12 flex-col text-2xl">
          {navlink.map((el, key) => (
            <NavLink
              className={({ isActive }) =>
                [isActive ? "SideMenu" : ""].join(" ")
              }
              key={key}
              to={el.to}
            >
              {el.title}
            </NavLink>
          ))}

          <span className="cursor-pointer"> درباره ما</span>
        </div>
      </div>
    </div>
  );
}

export default HambergurMenu;
