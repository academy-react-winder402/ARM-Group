/* eslint-disable react/prop-types */
function Subject({ title, description }) {
  return (
    <>
      <h2 className="text-3xl text-textColor pt-12 font-bold">{title}</h2>
      <p className="text-base mt-8 text-textPcolor">{description}</p>
    </>
  );
}

export { Subject };
