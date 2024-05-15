import { Details } from "./Details.jsx";
import { Subject } from "../../Common/Landing/Subject.jsx";

function Product() {
  return (
    <div className="md:h-[458px] w-[85%]  m-auto mt-[200px] text-center" data-aos="fade-down">
      <Subject
        title="خدمات پژوهشگاه"
        description="همه آنچه برای طی کردن مسیر پیشرفت نیاز دارید"
      />
      <Details />
    </div>
  );
}

export { Product };
