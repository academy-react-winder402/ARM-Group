/* eslint-disable react/prop-types */
function TopText({ title, desc, tec }) {
  return (
    <>
      <h2 className="text-base text-textColor font-medium my-4 dark:text-[#ced4da]">
        {title}
      </h2>
      <h3 className="text-sm text-textColor font-light mb-3 h-20 overflow-hidden dark:text-[#868e96]">
        {desc}
      </h3>
      {/* <p className="text-xs text-textPaleColor leading-6">{tec}</p> */}
    </>
  );
}

export { TopText };
