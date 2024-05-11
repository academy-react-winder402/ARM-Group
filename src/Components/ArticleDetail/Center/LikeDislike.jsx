function LikeDislike() {
  return (
    <div className="flex gap-4 justify-end text-[15px] text-textColor ml-4">
      <div className="flex gap-2">
        <span>۳۰</span>
        <img
          src="./Image/ArticleDetail/social-network.png"
          alt="Yes"
          className="w-7 h-6"
        />
      </div>
      <div className="w-[2px] bg-textColor"></div>
      <div className="flex gap-2">
        <span>۳۰</span>
        <img
          src="../../../../public/Image/ArticleDetail/hand.png"
          alt="Yes"
          className="w-7 h-6"
        />
      </div>
    </div>
  );
}

export { LikeDislike };
