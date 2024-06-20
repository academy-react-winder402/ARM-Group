import { Suggest } from "./Suggest.jsx";
import { LastComment } from "./LastComment.jsx";
function Index() {
  return (
    <div className="w-fit mt-16 pt-4 flex max-lg:flex-wrap justify-center gap-4">
      <div className="flex gap-6">
        <Suggest
          title="بر اساس سلیقه شما"
          className="w-[350px] bg-white h-[590px] shadow-3xl rounded-[12px] p-4 dark:bg-[#212529]"
        />
        <Suggest
          title="ترند ها"
          className="w-[350px] bg-white h-[590px] shadow-3xl rounded-[12px] p-4 dark:bg-[#212529] max-md:hidden"
        />
      </div>
      <div>
        <LastComment />
      </div>
    </div>
  );
}

export { Index };
