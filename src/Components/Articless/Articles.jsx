import { Subject } from "../Common/Landing/Subject.jsx";
import { Details } from "./Details.jsx";
import { Index } from "./Suggest/Index.jsx";
import Filter from "./Filter/index.jsx";

function Articles() {
  return (
    <div
      className="container max-sm:w-[400px] w-[1120px] mx-auto mt-[80px]"
      style={{ direction: "rtl" }}
    >
      <div className="text-center">
        <Subject
          title="اخبار و مقالات"
          description="متن مرتبط با بخش خبر  ها"
        />
      </div>

      <Filter />

      <Details />
      <Index />
    </div>
  );
}

export default Articles;
