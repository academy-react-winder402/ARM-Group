function TopText({ course, title, desc }) {
  return (
    <>
      <h2 className="text-base text-textColor font-medium my-4">{course}</h2>
      <h3 className="text-sm text-textColor font-light mb-3">{title}</h3>
      <p className="text-xs text-textPaleColor leading-6">{desc}</p>
    </>
  );
}

export { TopText };
