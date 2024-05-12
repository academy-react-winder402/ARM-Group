function HeaderBox() {
  return (
    <div className="h-[45px] flex items-center justify-between w-full px-2 shadow-3xl rounded-xl">
      <h3 className="text-base font-bold text-textColor">یه عنوان دیگه</h3>
      <img
        src="./Image/ArticleDetail/arrow-down-to-dotted-line.png"
        alt="Arrow Down"
        className="w-6 h-6"
      />
    </div>
  );
}

export { HeaderBox };
