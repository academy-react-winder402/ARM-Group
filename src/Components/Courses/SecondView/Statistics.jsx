/* eslint-disable react/prop-types */
function Statistics({ statistics }) {
  return (
    <div className="flex justify-between my-4 mr-6">
      {statistics.map((item) => {
        return (
          <div className="flex items-center gap-0.5" key={item.id}>
            <span className="text-[32px] text-[#878787]">{item.number}</span>
            <span className="text-xs text-textMidColor">{item.title}</span>
          </div>
        );
      })}
    </div>
  );
}

export { Statistics };
