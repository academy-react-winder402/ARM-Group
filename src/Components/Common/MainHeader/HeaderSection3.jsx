import { NavLink } from "react-router-dom";

const HeaderSection3 = () => {
  return (
    <div className="flex justify-center gap-[5px] flex-nowrap mt-[13px]">
      <div className="HeaderPics bg-[url('./Image/HeaderIcons/searchLogo.svg')]"></div>
      {/* <div className="HeaderPics bg-[url('./Image/HeaderIcons/loginLogo.svg') ]"></div> */}
      <div className="flex gap-[10px] mt-[4px] mr-[10px] text-[14px] text-[#727272]">
        <NavLink
          to={"/LogIn"}
          className={({ isActive }) =>
            [
              isActive
                ? "transition text-[#D4AF37]"
                : "transition hover:scale-110 hover:text-[#D4AF37]",
            ].join(" ")
          }
        >
          ورود
        </NavLink>
        <div> / </div>
        <NavLink
          to={"/SignUp"}
          className={({ isActive }) =>
            [
              isActive
                ? "transition text-[#D4AF37]"
                : "transition hover:scale-110 hover:text-[#D4AF37]",
            ].join(" ")
          }
        >
          ثبت نام
        </NavLink>
      </div>
    </div>
  );
};

export default HeaderSection3;
