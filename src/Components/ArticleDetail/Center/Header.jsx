import Pic from "../../../../public/Image/Article/backGround.png";
function Header({ data }) {
  return (
    <>
      <div className="relative">
        <img
          className="h-[300px] w-full rounded-xl"
          src={data.currentImageAddress ? data.currentImageAddress : Pic}
          alt=""
        />
        <div className="text-[11px] text-textMidColor flex flex-col absolute left-[20px] bottom-[-40px]">
          <img
            src="../../../../public/Image/ArticleDetail/ArticleDetailBg.png"
            alt="Picture"
            className="w-[60px] h-[60px] rounded-full shadow-2xl"
          />
          <span className="relative left-4">{data.addUserFullName}</span>
        </div>
      </div>
      <h3 className="text-xl text-textColor mt-2 p-2 dark:text-[#dee2e6]">
        {data.title}
      </h3>
    </>
  );
}

export { Header };
