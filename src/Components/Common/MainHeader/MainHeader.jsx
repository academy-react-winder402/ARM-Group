import HeaderSection1 from "./HeaderSection1";
import { HeaderSection2 } from "./HeaderSection2";
import HeaderSection3 from "./HeaderSection3";
import HambergurMenu from "./HambergurMenu.jsx";

const MainHeader = () => {
  return (
    <div
      className="transition-all duration-[1s] fixed top-0 z-50 drop-shadow-[0px_10px_10px_rgba(0,0,0,0.1)] h-[55px] w-[100%] flex justify-between gap-8 flex-nowrap px-20 border-b-[1px] border-[#E6E6E5] dark:border-Dark_Border text-[#5E5E5E] dark:text-Dark_TextColor_1 bg-[#F5F5F4] dark:bg-Dark_HeaderBgColor max-md:px-[10px]"
      style={{ direction: "rtl" }}
    >
      <div className="flex gap-2">
        <HambergurMenu />
        <HeaderSection1 />
      </div>
      <HeaderSection2 />
      <HeaderSection3 />
    </div>
  );
};

export default MainHeader;
