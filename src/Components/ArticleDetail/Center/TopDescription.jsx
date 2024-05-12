import { Header } from "./Header.jsx";
import { ArticleTitle } from "./ArticleTitle.jsx";
import { LikeComment } from "./LikeComment.jsx";
import { LikeDislike } from "./LikeDislike.jsx";
import { TextArea } from "./TextArea.jsx";

function TopDescription() {
  return (
    <div className="h-[1120px] p-1 mb-4 rounded-[15px] shadow-lg">
      <Header />
      <LikeComment />
      <div className="h-[130px] mt-6 text-textMidColor pr-2">
        <p className="text-[11px]">خروجی جیسون پارسر </p>
      </div>
      <img
        src="./Image/ArticleDetail/Interested.png"
        alt="Interested"
        className="mt-16 mb-6"
      />

      <ArticleTitle />
      <ArticleTitle />
      <ArticleTitle />
      <ArticleTitle />
      <ArticleTitle />

      <LikeDislike />

      <TextArea />
    </div>
  );
}

export { TopDescription };
