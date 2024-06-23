/* redux */
import { useSelector } from "react-redux";
import Pic from "../../../public/Image/Article/backGround.png";

const BigImage = () => {
  const Details = useSelector((state) => state.CourseDetail.CourseObj);
  return (
    <img
      className="overflow-hidden h-[346px] w-full rounded-[15px] drop-shadow-[-15px_15px_30px_rgba(0,0,0,0.06)]"
      src={Details.imageAddress ? Details.imageAddress : Pic}
    />
  );
};

export default BigImage;
