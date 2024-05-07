import { Subject } from "../Common/Landing/Subject";
import { Details } from "./Details.jsx";
function Articles() {
  return (
    <div
      className="container max-sm:w-[400px] w-[1300px] mx-auto"
      style={{ direction: "rtl" }}
    >
      <div className="text-center">
        <Subject
          title="اخبار و مقالات"
          description="متن مرتبط با بخش خبر  ها"
        />
      </div>
      <Details />
    </div>
  );
}

export default Articles;
