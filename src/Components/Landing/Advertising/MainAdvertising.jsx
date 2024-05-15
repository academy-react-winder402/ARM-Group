import { Slider } from "./Slider";
import { SliderButtons } from "./SliderButtons";

export const MainAdvertising = () => {
  return (
    <div
      className="mt-[250px] relative h-[690px] w-[87.5%] mx-auto text-center"
      style={{ direction: "rtl" }}
      data-aos="fade-down"
    >
      <div className="text-[30px] text-[#5E5E5E] mt-[65px] dark:text-Dark_TextColor_1">
        با افتخار از آکادمی بحرالعلوم
      </div>
      <div className="text-[16px] text-[#7E7E7E] mt-[20px] mb-[70px] dark:text-Dark_TextColor_2">
        موفقیت و حضور دانش آموخته‌های ما در شرکت های مطرح
      </div>
      <div className="mr-[120px] text-right flex flex-nowrap">
        <div className="border-black border-[1px] h-[100px] w-[100px] rounded-full"></div>
        <div>
          <p className="text-[24px] text-[#5E5E5E] mt-[10px] dark:text-Dark_TextColor_1">نام دانشجو</p>
          <p className="text-[18px] text-[#5E5E5E] mt-[20px] dark:text-Dark_TextColor_2">
            از پاییز ۹۸ ... عنوان سمت فعلی در علی بابا
          </p>
        </div>
      </div>
      <div className="mt-[50px] px-[45px] h-[180px]">
        <Slider />
        <SliderButtons />
      </div>
    </div>
  );
};
