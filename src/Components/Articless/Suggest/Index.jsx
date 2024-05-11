import { Suggest } from "./Suggest.jsx";
import { LastComment } from "./LastComment.jsx";
function Index() {
  return (
    <div className="mt-16 h-[650px] pt-4 flex justify-between">
      <Suggest title="بر اساس سلیقه شما" />
      <Suggest title="ترند ها" />
      <LastComment />
    </div>
  );
}

export { Index };
