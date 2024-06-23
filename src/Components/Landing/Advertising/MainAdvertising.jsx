import { Slider } from "./Slider";
import { SliderButtons } from "./SliderButtons";

export const MainAdvertising = () => {
  return (
    <div
      className="mt-[300px] md:mt-[620px] relative h-[690px] w-[87.5%] mx-auto text-center"
      style={{ direction: "rtl" }}
      data-aos="fade-down"
    >
      <div className="text-[30px] text-[#5E5E5E] mt-[65px] dark:text-Dark_TextColor_1">
        با افتخار از آکادمی بحرالعلوم
      </div>
      <div className="text-[16px] text-[#7E7E7E] mt-[20px] mb-[70px] dark:text-Dark_TextColor_2">
        موفقیت و حضور دانش آموخته‌های ما در شرکت های مطرح
      </div>
      <div className="md:mr-[120px] text-right flex items-center gap-4 flex-nowrap">
        <img
          src="../../../../public/Image/Article/backGround.png"
          alt=""
          className="h-[100px] w-[100px] rounded-full"
        />
        <div>
          <p className="text-[24px] text-[#5E5E5E] mt-[10px] dark:text-Dark_TextColor_1">
            مصطفی-جان
          </p>
          <p className="text-[18px] text-[#5E5E5E] mt-[20px] dark:text-Dark_TextColor_2">
            ست نیوزتست نیوزتست نیوزتست نیوزتست نیوزتست نیوزتست نیوزتست نیوزتست
            نیوز
          </p>
        </div>
      </div>
      <div className="md:mr-[120px] text-right flex items-center gap-4 flex-nowrap mt-16">
        <img
          src="../../../../public/Image/Article/backGround.png"
          alt=""
          className="h-[100px] w-[100px] rounded-full"
        />
        <div>
          <p className="text-[24px] text-[#5E5E5E] mt-[10px] dark:text-Dark_TextColor_1">
            رضا-اکبری
          </p>
          <p className="text-[18px] text-[#5E5E5E] mt-[20px] dark:text-Dark_TextColor_2">
            دوره دوره 313دوره 313دوره 313دوره 313دوره 313دوره 313 313
          </p>
        </div>
      </div>
      <div className="mt-[50px] px-[45px] h-[180px]">
        <Slider />
        {/* <SliderButtons /> */}
      </div>
    </div>
  );
};
