function Header() {
  return (
    <>
      <div className="relative">
        <img
          className="h-[300px] w-full"
          src="../../../../public/Image/ArticleDetail/ArticleDetailBg.png"
          alt=""
        />
        <div className="text-[11px] text-textMidColor flex flex-col absolute left-[20px] bottom-[-40px]">
          <img
            src="../../../../public/Image/ArticleDetail/ArticleDetailBg.png"
            alt="Picture"
            className="w-[60px] h-[60px] rounded-full shadow-2xl"
          />
          <span>نویسنده خبر</span>
        </div>
      </div>
      <h3 className="text-xl text-textColor mt-2 p-2 dark:text-[#dee2e6]">
        عنوان خبر
      </h3>
    </>
  );
}

export { Header };
