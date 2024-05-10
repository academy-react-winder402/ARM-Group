import { Suggest } from "./Suggest.jsx";
import { LastComment } from "./LastComment.jsx";
function Index() {
  return (
    <div className="border mt-16 h-[900px] pt-4 flex justify-between">
      <Suggest title="بر اساس سلیقه شما" />
      <Suggest title="ترند ها" />
      <LastComment />
    </div>
  );
}

export { Index };
