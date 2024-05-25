import ThemeModeButt from "./ThemeModeButt";
import {
  GetItem,
  RemoveItem,
} from "../../../Core/Services/common/Storage.Services";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import { useEffect } from "react";

const HeaderSection3 = () => {
  const LogOut = () => {
    RemoveItem("token");
    setIsLogIn(false);
    toast.success("از حساب کاربری خارج شدید");
  };

  const [IsLogIn, setIsLogIn] = useState(false);

  useEffect(() => {
    if (GetItem("token")) {
      setIsLogIn(true);
    } else {
      setIsLogIn(false);
    }
  });

  return (
    <div className="flex justify-center gap-[5px] flex-nowrap mt-[13px]">
      <div className="HeaderPics bg-[url('./Image/HeaderIcons/searchLogo.svg')] dark:bg-[#212529]"></div>

      {IsLogIn ? (
        <div className="HeaderPics bg-[url('./Image/HeaderIcons/Profile.svg')] dark:bg-[#212529]">
          <div className="flex flex-col text-center gap-2">
            <h3 className="text-[#5E5E5E] mt-2 text-[14px]  hover:scale-105 transition-all">
              پنل کاربری
            </h3>
            <h3
              onClick={LogOut}
              className="text-[#FF0000] text-[12px] hover:scale-105 transition-all"
            >
              خروج از حساب
            </h3>
          </div>
        </div>
      ) : (
        <div className="w-[100px] flex gap-[10px] mt-[4px] mr-[10px] text-[14px] text-[#727272] dark:text-Dark_TextColor_1">
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
                  ? "transition text-[#D4AF37] "
                  : "transition hover:scale-110 hover:text-[#D4AF37]",
              ].join(" ")
            }
          >
            ثبت نام
          </NavLink>
        </div>
      )}

      <div className="flex items-center w-[60px] relative">
        <ThemeModeButt />
      </div>
    </div>
  );
};

export default HeaderSection3;
