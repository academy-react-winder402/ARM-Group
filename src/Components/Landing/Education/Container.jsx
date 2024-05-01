import { Detail } from "./Detail.jsx";
import { Subject } from "../../Common/Landing/Subject.jsx";

export const Education = () => {
  return (
    <div className="md:mt-44 text-right">
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
