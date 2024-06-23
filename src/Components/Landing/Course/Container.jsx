import { Subject } from "../../Common/Landing/Subject";
export const Course = () => {
  return (
    <div
      className="cotainer md:w-[90%] xl:mt-[520px] mt-[300px] m-auto text-right mb-10"
      dir="rtl"
      data-aos="fade-down"
    >
      <div className="text-right mb-10" dir="rtl">
        <div className="text-center mx-auto w-1/2">
          <Subject title="دوره های آموزشی ما" description="متن مرتبط" />
        </div>
        <div className="md:w-4/5 mx-auto mt-10 translate-x-[15px]">
          <img
            className="md:mt-20 relative "
            src="./Image/Landing/coursesGroup.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
