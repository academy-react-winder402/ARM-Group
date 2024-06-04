import { LikeDislike } from "./LikeDislike.jsx";
function CommentDetail() {
  return (
    <div className="flex flex-col gap-4 h-[120px] mt-8">
      <div className="h-[90px] flex gap-2">
        <img
          src="../../../../public/Image/ArticleDetail/ArticleDetailBg.png"
          alt="BackGround"
          className="w-[50px] h-[50px] rounded-[8px]"
        />
        <div className="w-full">
          <div className="flex justify-between mt-1 mb-3">
            <div className="flex text-textColor text-xs">
              <span className="pl-3">نام نویسنده نظر</span>
              <span>|</span>
              <span className="px-3"> ۲۵ اردیبهشت ۱۴۰۳ </span>
              <span>|</span>
              <span className="px-3">ساعت ۱۶:۲۴ </span>
              <span>|</span>
              <span className="pr-3">۲ روز پیش</span>
            </div>
            <LikeDislike />
          </div>
          <p className="text-xs text-textColor">
            متن مرتبط با نظرات دوره لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ،ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
            صنعت چاپ،
          </p>
        </div>
      </div>
      <div className="h-[40px] border-b border-[#C2C2C2] pr-12 flex justify-between items-center pb-2">
        <div className="w-[116px] h-[25px] flex justify-center items-center text-[11px] text-textColor bg-[#e9ecef] rounded-[15px]">
          مشاهده پاسخ ها (۶)
        </div>
        <div className="w-[100px] h-[25px] flex justify-center gap-2 items-center text-[11px] text-textColor bg-[#e9ecef] rounded-[15px]">
          <span>پاسخ دادن</span>
          <img
            src="../../../../public/Image/ArticleDetail/redo.png"
            alt=""
            className="w-[15px] h-[13px]"
          />
        </div>
      </div>
    </div>
  );
}

export { CommentDetail };
