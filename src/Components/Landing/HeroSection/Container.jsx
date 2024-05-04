import DefualtButton from "../../Common/DefualtButton";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <div
      className="w-[87.5%] mx-auto h-[458px] mt-[30px] text-right flex flex-col max-md:items-center md:justify-start"
      className="h-[458px] mt-[30px] mx-auto w-[85%] text-right flex flex-col max-md:items-center md:justify-start"
      style={{ direction: "rtl" }}
    >
      <h1 className="text-3xl text-textColor mt-16 dark:text-Dark_TextColor_1">
        آکادمی بحرالعلوم
      </h1>
      <p className="max-md:px-8 inline-block text-textPcolor text-base md:w-[560px] leading-9 my-12 dark:text-Dark_TextColor_2">
        آکادمی جامعه کوچکی است از ذهن های بزرگ برای رشد مراتب تخصص و دانستگی هدف
        تغییر سرنوشت هاست با درک دوباره لذت کدنویسی
      </p>

      <div className="w-[180px] h-[40px]  rounded-lg overflow-hidden">
        <DefualtButton
          innerHTML="مشاهده دوره ها"
          Style={{
            background: "linear-gradient(to right bottom, #D4AF37, #E1C564)",
            fontSize: "16px",
            fontFamily: "IranSanse",
          }}
          onClick={() => {
            setTimeout(() => {
              navigate("/Courses");
            }, 300);
          }}
        />
      </div>
    </div>
  );
}

export { HeroSection };
