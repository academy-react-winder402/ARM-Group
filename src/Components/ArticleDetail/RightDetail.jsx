function RightDetail() {
  return (
    <div className="border flex flex-col">
      <h3 className="text-[12px] text-[#434343] mb-1">
        عنوان خبر لورم ایپسوم متن ساخ...
      </h3>
      <div className="flex gap-2 flex-row-reverse">
        <img
          src="../../../public/Image/ArticleDetail/ArticleDetailBg.png"
          alt="Bg"
          className="w-10 h-10 rounded-[8px]"
        />
        <div className="flex flex-col justify-evenly gap-1 text-[11px] text-textColor">
          <span>نویسنده خبر</span>
          <div className="flex">
            <span> ۲۵ / ۲ / ۱۴۰۳</span>
            <div className="flex"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { RightDetail };
