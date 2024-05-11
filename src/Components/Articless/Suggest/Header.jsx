/* eslint-disable react/prop-types */
function Header({ title, textSize }) {
  return (
    <>
      <h2
        className={
          "text-2xl text-[#434343] font-semibold px-[12px] py-[10px] " +
          (textSize ? textSize : "")
        }
      >
        {title}
      </h2>
      <img
        className="my-[10px] h-[2.5px]"
        src="./Image/Article/Line.png"
        alt="Line"
      />
    </>
  );
}

export { Header };
