/* eslint-disable react/prop-types */
function Statistics({ stu }) {
  return (
    <div className="flex justify-between my-4 mr-6">
      <div className="flex items-center gap-2 text-[#878787]">
        <span className="text-[32px]">{stu}</span>
        <span className="text-xs text-textMidColor">دانشجو تا کنون</span>
      </div>
      <div className="flex items-center gap-2 text-[#878787]">
        <span className="text-[32px]">--</span>
        <span className="text-xs text-textMidColor">تعداد برگذاری</span>
      </div>
      <div className="flex items-center gap-2 text-[#878787]">
        <span className="text-[32px]">--</span>
        <span className="text-xs text-textMidColor">اطلاعات مهم</span>
      </div>
    </div>
  );
}

export { Statistics };
