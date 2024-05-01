import BorderDiv from "./BorderDiv";
import { FooterLinks } from "./FooterLinks";

const RightFooter = () => {
  return (
    <div>
      <div className="hidden max-[1000px]:block">
        <BorderDiv />
      </div>
      <div className="w-[560px] mt-[50px] max-[1000px]:w-[87%] max-[1000px]:mx-auto" style={{direction:'rtl'}}>
      <div className="text-[25px] mb-4">پژوهشگاه سپهر</div>
      <p className="text-[12px] h-[118px] mb-[10px]">
        متن مختصری درباره پژوهشگاه لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
        از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
        روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
        تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی{" "}
      </p>
      <FooterLinks />
      <FooterLinks />
    </div>
    </div>
  );
};

export default RightFooter;
