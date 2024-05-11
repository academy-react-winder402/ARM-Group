function LikeComment() {
  return (
    <div className="flex justify-end gap-4 text-[11px] text-textMidColor pl-4">
      <div className="flex gap-2 items-center ml-10">
        <span className="font-medium">زمان مطالعه</span>
        <img src="./Image/Article/clock-three.png" className="w-5 h-5" alt="" />
      </div>

      <div className="flex gap-2 items-center">
        <span>۱۳۰</span>
        <img src="./Image/Article/heart.png" className="w-5 h-5" alt="" />
      </div>
      <div className="flex gap-2 items-center">
        <span>۷۶</span>
        <img src="./Image/Article/comment.png" className="w-5 h-5" alt="" />
      </div>
    </div>
  );
}

export { LikeComment };
