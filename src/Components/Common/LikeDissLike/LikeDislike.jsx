/* eslint-disable react/prop-types */
function LikeDislike({ likeCount, disslikeCount }) {
  return (
    <div className="flex gap-4 justify-end text-[15px] text-textColor ml-4">
      <div className="flex gap-2">
        <span>{likeCount}</span>
        <img
          src="../../../../public/Image/ArticleDetail/social-network.png"
          alt="Yes"
          className="w-7 h-6"
        />
      </div>
      <span>|</span>
      <div className="flex gap-2">
        <span>{disslikeCount}</span>
        <img
          src="../../../../public/Image/ArticleDetail/hand.png"
          alt="No"
          className="w-7 h-6"
        />
      </div>
    </div>
  );
}

export { LikeDislike };
