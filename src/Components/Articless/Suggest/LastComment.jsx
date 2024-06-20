import { Header } from "./Header.jsx";
import { CommentDetail } from "./CommentDetail.jsx";

function LastComment({ title, data }) {
  return (
    <div className="w-[350px] bg-white h-[590px] shadow-3xl rounded-[12px] p-4  dark:bg-[#212529]">
      <Header title="آخرین نظرات" />
      <CommentDetail data={data} />
    </div>
  );
}

export { LastComment };
