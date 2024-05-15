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
      <div className="flex flex-nowrap justify-between gap-[30px] max-[1000px]:flex-wrap max-[1000px]:flex-row-reverse">
        <LeftFooter />
        <RightFooter />
      </div>
      <FooterIcons />
      <BorderDiv />
      <div className="text-[16px] text-center mt-[5px] dark:text-Dark_TextColor_1">Sepehr Academy</div>
    </div>
  );
};

export default MainFooter;
