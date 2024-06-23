import { Header } from "./Header.jsx";
import { ArticleTitle } from "./ArticleTitle.jsx";
import { LikeComment } from "./LikeComment.jsx";
import { LikeDis } from "./LikeDis.jsx";
import { TextArea } from "./TextArea.jsx";

function TopDescription({ data }) {
  return (
    <div className=" bg-white dark:bg-[#343a40] p-1 mb-4 rounded-[15px] shadow-lg">
      <Header data={data} />
      <LikeComment />
      <div className=" mt-6 text-textMidColor pr-2">
        <p className="text-[12px] dark:text-[#ced4da] leading-7">
          {data.describe}
        </p>
      </div>
      <img
        src="../../../../public/Image/ArticleDetail/Interested.png"
        alt="Interested"
        className="mt-16 mb-6"
      />

      <ArticleTitle />
      <ArticleTitle />
      <ArticleTitle />
      <ArticleTitle />
      <ArticleTitle />

      {/* <LikeDislike /> */}

      {/* <TextArea /> */}
    </div>
  );
}

export { TopDescription };
