import { Detail } from "./Detail.jsx";
import { Subject } from "../../Common/Landing/Subject.jsx";

export const Education = () => {
  return (
    <div
      className="mt-48 md:mt-44 text-right w-[85%] mx-auto"
      data-aos="fade-down"
    >
      <div className="text-center">
        <Subject
          title="آموزش‌های متناسب با سنین مختلف"
          description="متد‌های آموزشی متفاوت برای بهره‌مندی حداکثری سنین مختلف"
        />
      </div>
      <Detail />
    </div>
  );
};
