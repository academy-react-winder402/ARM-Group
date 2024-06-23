function LikeDislike() {
  return (
    <div className="flex gap-4 justify-end text-[15px] text-textColor ml-4 dark:text-[#ced4da]">
      <div className="flex items-center gap-2">
        <span>۳۰</span>
        <img
          src="../../../../public/Image/ArticleDetail/social-network.png"
          alt="Yes"
          className="w-5 h-4 sm:w-7 sm:h-6"
        />
      </div>
      <span>|</span>
      <div className="flex items-center gap-2">
        <span>۳۰</span>
        <img
          src="../../../../public/Image/ArticleDetail/hand.png"
          alt="No"
          className="w-5 h-4 sm:w-7 sm:h-6"
        />
      </div>
    </div>
  );
}

export { LikeDislike };
