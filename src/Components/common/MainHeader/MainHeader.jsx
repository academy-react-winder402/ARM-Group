import HeaderSection1 from "./HeaderSection1";
import { HeaderSection2 } from "./HeaderSection2";
import HeaderSection3 from "./HeaderSection3";

const MainHeader = () => {
  return (
    <div
      className="drop-shadow-[0px_10px_10px_rgba(0,0,0,0.1)] h-[55px] w-[100%] flex justify-between flex-nowrap px-32 border-b-[1px] border-[#E6E6E5] text-[#5E5E5E] bg-[#F5F5F4] max-md:px-[3rem]"
      style={{ direction: "rtl" }}
    >
      <HeaderSection1 />
      <HeaderSection2 />
      <HeaderSection3 />
    </div>
  );
};

export default MainHeader;
