/* eslint-disable react/prop-types */
function Subject({ title, description }) {
  return (
    <>
      <h2 className="text-3xl text-textColor pt-12 font-bold dark:text-[#ced4da]">
        {title}
      </h2>
      <p className="text-base mt-8 text-textPcolor dark:text-Dark_TextColor_2">
        {description}
      </p>
    </>
  );
}

export { Subject };
