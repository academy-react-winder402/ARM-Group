const ScrolBtn = () => {
  window.addEventListener("scroll", () => {
    var scrollBtn = document.getElementById("scs");
    if (window.pageYOffset > 200) {
      scrollBtn.classList.remove("HideScrolBtn");
      scrollBtn.classList.add("ShowScrolBtn");
    } else {
      scrollBtn.classList.remove("ShowScrolBtn");
      scrollBtn.classList.add("HideScrolBtn");
    }
  });

  return (
    <div
      id="scs"
      className='HideScrolBtn fixed top-[550px] right-[2%] cursor-pointer w-[40px] h-[40px] rounded-full bg-[url("./Image/ScrolBtn/ScrolBtn.svg")] bg-[length:25px] bg-no-repeat bg-center border-orange-400 border-[2px]'
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    ></div>
  );
};

export default ScrolBtn;
