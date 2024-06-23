/* eslint-disable react/prop-types */
function Scores({
  numberOfComment,
  numberOfScore,
  numberOfLike,
  numberOfUser,
}) {
  return (
    <div>
      <img src="./Image/Course/Group 123.svg" alt="line" />
      <div className="flex justify-between mr-6 my-2">
        <>
          <div className="flex gap-1.5">
            <span className="text-textMidColor text-xs">{numberOfComment}</span>
            <img
              src="../../../../public/Image/Course/comment.svg"
              alt="comment"
            />
            <span className="text-textMidColor text-xs">کامنت</span>
          </div>
          <div className="flex gap-1.5">
            <span className="text-textMidColor text-xs">--</span>
            <img src="../../../../public/Image/Course/star.svg" alt="star" />
            <span className="text-textMidColor text-xs">رتبه</span>
          </div>
          <div className="flex gap-1.5">
            <span className="text-textMidColor text-xs">{numberOfLike}</span>
            <img src="../../../../public/Image/Course/heart.svg" alt="like" />
            <span className="text-textMidColor text-xs">لایک</span>
          </div>
          <div className="flex gap-1.5">
            <span className="text-textMidColor text-xs">{numberOfUser}</span>
            <img src="../../../../public/Image/Course/user.svg" alt="user" />
            <span className="text-textMidColor text-xs">کاربر</span>
          </div>
        </>
      </div>
    </div>
  );
}

export { Scores };
