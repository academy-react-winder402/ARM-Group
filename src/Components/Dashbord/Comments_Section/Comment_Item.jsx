/* eslint-disable react/prop-types */
import OverviewIcon from "../../../../public/Image/Dashbord/Comments/overview";
import ArrowSquareIcon from "../../../../public/Image/Dashbord/Comments/arrowSquare";
function Comment_Item({ CommentObj }) {
  return (
    <div>
      <span className="w-[263px]">{CommentObj.CommentText}</span>
      <span className="w-[177px]">{CommentObj.CommentOnvan}</span>
      <span className="w-[140px]">{CommentObj.Category}</span>
      <span className="w-[120px]">{CommentObj.Answer}</span>
      <span className="w-[75px] flex justify-start items-center pr-4">
        <ArrowSquareIcon />
      </span>
      <span className="w-[75px] flex justify-start items-center pr-7">
        <OverviewIcon />
      </span>
    </div>
  );
}

export default Comment_Item;
