/* eslint-disable react/prop-types */
import OverviewIcon from "../../../../public/Image/Dashbord/Comments/overview";
import ArrowSquareIcon from "../../../../public/Image/Dashbord/Comments/arrowSquare";
function Comment_Item({ CommentObj }) {
  return (
    <div>
      <span className="w-[263px]">{CommentObj.CommentText}</span>
      <span className="w-[377px]">{CommentObj.CommentOnvan}</span>
      <span className="w-[177px]">{CommentObj.Category}</span>
    </div>
  );
}

export default Comment_Item;
