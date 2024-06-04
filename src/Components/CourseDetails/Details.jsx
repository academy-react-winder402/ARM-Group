import { useEffect, useState } from "react";
import { DetailsSection1 } from "./DetailsSection1";
import { useParams } from "react-router-dom";
import { GetCourseById } from "../../Core/Services/api/CourseDetail/GetCourseById";
import { GetCourseComments } from "../../Core/Services/api/CourseDetail/GetCourseComments";
import AccordionBorder from "./Accordion";
import { Comments } from "./Comments";
import "./Style/style.css";

/* redux */
import { useDispatch, useSelector } from "react-redux";
import { SetCourseObj } from "../../Redux/Slices/CourseDetail";
import CountUp from "react-countup";

const Details = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const Details = useSelector((state) => state.CourseDetail.CourseObj);
  const [SliderStep, setSliderStep] = useState(0);
  const [CommentObj, setCommentObj] = useState([]);

  const GetCourseDetail = async (id) => {
    const Details = await GetCourseById(id);
    dispatch(SetCourseObj(Details));
  };

  const GetCourseCommentsAPI = async (id) => {
    const Details = await GetCourseComments(id);
    setCommentObj(Details);
    console.log(Details);
  };

  useEffect(() => {
    SliderStep == 3 && GetCourseCommentsAPI(params.id);
  }, [SliderStep]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    GetCourseDetail(params.id);
    let firstMenu = document.getElementById("Radio0");
    firstMenu.checked = true;

    /*  */
    const Now = new Date();
    let CurrDay = Now.getMonth();

    console.log(CurrDay);
  }, []);

  return (
    <div
      className="w-[87.5%] mx-auto mt-[100px] pt-[1rem]"
      style={{ direction: "rtl" }}
    >
      <DetailsSection1 />

      <div
        className="flex flex-nowrap justify-between text-center pt-[35px] px-[65px]"
        style={{ fontFamily: "IransnsNumber" }}
      >
        <div className="CourseDetailstexts">
          <div>
            <CountUp duration={5} end={Details.currentRegistrants} />
          </div>
          <div className="text-[18px] font-normal">تعداد دانشجو</div>
        </div>
        <div className="CourseDetailstexts">
          <div>
            <CountUp duration={5} end={4} />
          </div>
          <div className="text-[18px] font-normal">سرفصل آموزشی</div>
        </div>
        <div className="CourseDetailstexts">
          <div>
            <CountUp duration={5} end={Details.capacity} />
          </div>
          <div className="text-[18px] font-normal"> تعداد دانشجو مانده </div>
        </div>
        <div className="CourseDetailstexts">
          <div>
            <CountUp duration={5} end={Details.commentCount} />
          </div>
          <div className="text-[18px] font-normal">تعداد کامنت ها</div>
        </div>
      </div>

      <div className="mt-[45px] h-[600px] overflow-x-hidden bg-[#FEFEFE] pt-[30px] rounded-[15px] relative ">
        <div className="SliderRadio w-[95%] h-[63px] pt-[17px] mx-auto flex flex-nowrap justify-between rounded-[8px] px-[35px] bg-[#FFFFFF] drop-shadow-[-5px_5px_10px_rgba(0,0,0,0.11)]">
          <input id="Radio0" type="radio" name="radio" />
          <label
            className="CourseDetailstexts2"
            onClick={() => {
              setSliderStep(0);
            }}
            htmlFor="Radio0"
          >
            توضیحات
          </label>

          <input id="Radio1" type="radio" name="radio" />
          <label
            onClick={() => {
              setSliderStep(1);
            }}
            htmlFor="Radio1"
            className="CourseDetailstexts2"
          >
            سرفصل ها
          </label>

          <input id="Radio2" type="radio" name="radio" />
          <label
            onClick={() => {
              setSliderStep(2);
            }}
            htmlFor="Radio2"
            className="CourseDetailstexts2"
          >
            ارسال تسک
          </label>

          <input id="Radio3" type="radio" name="radio" />
          <label
            onClick={() => {
              setSliderStep(3);
            }}
            htmlFor="Radio3"
            className="CourseDetailstexts2"
          >
            کامنت ها
          </label>

          <input id="Radio4" type="radio" name="radio" />
          <label
            onClick={() => {
              setSliderStep(4);
            }}
            htmlFor="Radio4"
            className="CourseDetailstexts2"
          >
            حسابداری
          </label>
        </div>

        <div
          className="h-fit top-[20%] w-[500%] flex absolute transition-all duration-[1s]"
          style={{ right: SliderStep * -100 + "%" }}
        >
          <div className="w-[20%] pt-5 pr-[40px] pl-[40px] text-[#5E5E5E] leading-10 ">
            <p>{Details.describe}</p>
          </div>
          <div className="w-[20%]">
            <div className="px-[40px] ">
              <AccordionBorder />
            </div>
          </div>
          <div className="border border-green-500 w-[20%]">ارسال تسک</div>
          <div className="w-[20%]">
            <div className="w-[90%] m-auto pb-10">
              <Comments CommentObj={CommentObj} />
            </div>
          </div>
          <div className="border border-green-500 w-[20%]">حسابداری</div>
        </div>
      </div>
    </div>
  );
};

export default Details;
