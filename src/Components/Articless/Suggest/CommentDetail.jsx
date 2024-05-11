function CommentDetail() {
  return (
    <div className="mb-5">
      <div
        className="h-[52px] border-2 border-[#e9e9e9] flex items-center pr-0.5 text-[10px] text-[#8A8A8A]"
        style={{ borderRadius: "10px 30px 30px 10px" }}
      >
        <img
          className="w-[45px] h-[45px] rounded-full"
          src="../../../../public/Image/Article/backGround.png"
          alt="author"
        />
        <div className="flex flex-col w-full gap-[10px] px-1">
          <div className="flex justify-between w-full">
            <span>نام نویسنده نظر در عنوان خبر </span>
            <div className="flex gap-1">
              <span> ۴ دقیقه پیش</span>
              <img
                src="../../../../public/Image/Article/clock-three.png"
                alt="clock"
                className="w-[15px] h[15px]"
              />
            </div>
          </div>
          <span> متن نظر لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم </span>
        </div>
      </div>
    </div>
  );
}

export { CommentDetail };
