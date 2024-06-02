/* redux */
import { useSelector } from "react-redux";

const BigImage = () => {
  const Details = useSelector((state) => state.CourseDetail.CourseObj);
  return (
    <img
      className="overflow-hidden h-[346px] w-full rounded-[15px] drop-shadow-[-15px_15px_30px_rgba(0,0,0,0.06)]"
      src={Details.imageAddress}
    />
  );
};

export default BigImage;
