import Pic from "../../../../public/Image/Article/backGround.png";

function LeftSide({ CourseObj }) {
  return (
    <div className="w-1/2 max-lg:w-2/5 m-1.5 rounded-xl">
      <img
        src={CourseObj.tumbImageAddress ? CourseObj.tumbImageAddress : Pic}
        alt=""
        className="w-full h-full overflow-hidden rounded-xl"
      />
    </div>
  );
}

export { LeftSide };
