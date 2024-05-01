import HeaderSection1 from "./HeaderSection1";
import { HeaderSection2 } from "./HeaderSection2";
import HeaderSection3 from "./HeaderSection3";

const MainHeader = () => {
  return (
    <div
      className="transition-all duration-[1s] drop-shadow-[0px_10px_10px_rgba(0,0,0,0.1)] h-[55px] w-[100%] flex justify-between flex-nowrap px-20 border-b-[1px] border-[#E6E6E5] dark:border-Dark_Border text-[#5E5E5E] dark:text-Dark_TextColor_1 bg-[#F5F5F4] dark:bg-Dark_HeaderBgColor max-md:px-[3rem]"
      style={{ direction: "rtl" }}
    >
      <HeaderSection1 />
      <HeaderSection2 />
      <HeaderSection3 />
    </div>
  );
};

export default MainHeader;
