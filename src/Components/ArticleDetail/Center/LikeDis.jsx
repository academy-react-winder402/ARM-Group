import { useEffect, useState } from "react";
import { LikeDislike } from "../../Common/LikeDissLike/LikeDislike.jsx";

function LikeDis({ data }) {
  // const [Ratevalue, setRateValue] = useState();
  const [LikeValue, setLikeValue] = useState();
  const [DissLikeValue, setDissLikeValue] = useState();

  useEffect(() => {
    // setRateValue(Details.currentRate);
    setLikeValue(data.likeCount);
    setDissLikeValue(data.dissLikeCount);
  }, []);
  return (
    <div className="flex gap-4 justify-end text-[15px] text-textColor ml-4 dark:text-[#ced4da] mb-4">
      <LikeDislike
        likeCount={LikeValue}
        disslikeCount={DissLikeValue}
        // setLikeFnc={AddCourseLike}
        // setDissLikeFnc={DeleteCourseLike}
        // Id={Details.CourseId}
        // LikeId={Details.courseId}
        // LikeStatus={Details.currentUserLike == "1" ? true : false}
        // DissLikeStatus={Details.currentUserDissLike == "1" ? true : false}
      />
    </div>
  );
}

export { LikeDis };
