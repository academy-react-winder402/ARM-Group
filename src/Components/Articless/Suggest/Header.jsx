/* eslint-disable react/prop-types */
function Header({ title }) {
  return (
    <>
      <h2 className="text-2xl text-[#434343] font-semibold px-[12px] py-[10px]">
        {title}
      </h2>
      <img
        className="my-[10px]"
        src="../../../public/Image/Article/Line.png"
        alt="Line"
      />
    </>
  );
}

export { Header };
