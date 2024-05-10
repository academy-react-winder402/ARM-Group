import { Header } from "./Header.jsx";
import { Comment } from "./comment.jsx";
function LastComment({ title }) {
  return (
    <div className="w-[350px] h-[590px] shadow-3xl rounded-[12px] p-4">
      <Header title="آخرین نظرات" />
      <Comment />
    </div>
  );
}

export { LastComment };
