import { Subject } from "../../Common/Landing/Subject";
export const Course = () => {
  return (
    <div
      className="cotainer md:w-[1300px] h-[800px] m-auto mt-[480px] text-right mb-10"
      dir="rtl"
      data-aos="fade-down"
    >
      <div className="h-[800px] mt-72 text-right mb-10" dir="rtl">
        <div className="text-center mx-auto w-1/2">
          <Subject title="دوره های آموزشی ما" description="متن مرتبط" />
        </div>
        <div className="w-4/5 mx-auto mt-10 translate-x-[15px] ">
          <img
            className="mt-20 relative "
            src="./Image/Landing/coursesGroup.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
