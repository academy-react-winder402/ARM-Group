import { Details } from "./Details.jsx";
import { Subject } from "../../Common/Landing/Subject.jsx";

function Product() {
  return (
    <div className="md:h-[458px] w-[85%] m-auto md:mt-[100px] text-center">
      <Subject
        title="خدمات پژوهشگاه"
        description="همه آنچه برای طی کردن مسیر پیشرفت نیاز دارید"
      />
      <Details />
    </div>
  );
}

export { Product };
