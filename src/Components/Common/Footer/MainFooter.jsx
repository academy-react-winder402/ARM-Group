import "../../../index.css";
import BorderDiv from "./BorderDiv";
import RightFooter from "./RightFooter";
import LeftFooter from "./LeftFooter";
import FooterIcons from "./FooterIcons";

const MainFooter = () => {
  return (
    <div className="w-[87.5%] relative mx-auto py-[25px] text-[#565656]">
      <div className="max-[1000px]:hidden">
        <BorderDiv />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center px-6">
        <LeftFooter />
        <RightFooter />
      </div>
      <FooterIcons />
      <BorderDiv />
      <div className="text-[16px] text-center mt-[5px] dark:text-Dark_TextColor_1">
        Sepehr Academy
      </div>
    </div>
  );
};

export default MainFooter;
