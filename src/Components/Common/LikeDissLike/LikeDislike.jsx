//import { IconThumbUp } from "@tabler/icons-preact";
import {
  IconThumbDown,
  IconThumbDownFilled,
  IconThumbUp,
  IconThumbUpFilled,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

/* eslint-disable react/prop-types */
function LikeDislike({
  likeCount,
  disslikeCount,
  Id,
  setLikeFnc,
  setDissLikeFnc,
  LikeId,
  LikeStatus,
  DissLikeStatus,
}) {
  const [DissLike, setDissLike] = useState(LikeStatus ? true : false);
  const [Like, setLike] = useState(DissLikeStatus ? true : false);

  useEffect(() => {
    console.log(DissLike);
    console.log(LikeStatus);
    console.log(DissLikeStatus);
  }, [DissLike]);

  const DissLikeHandler = () => {
    if (DissLike == false) {
      setDissLike(true);
      setLike(false);

      setDissLikeFnc(LikeId);
    } else {
      setDissLike(false);
    }
  };
  const LikeHandler = () => {
    if (Like == false) {
      setLike(true);
      setDissLike(false);
      setLikeFnc(LikeId);
    } else {
      setLike(false);
    }
  };

  return (
    <div className="flex gap-2 justify-end text-[15px] text-textColor">
      <div className="flex gap-2 pl-[5px]">
        <span className="mt-1">{likeCount}</span>

        <input
          type="checkbox"
          className="hidden"
          onClick={LikeHandler}
          id={"like" + Id}
        />
        <label htmlFor={"like" + Id} className="cursor-pointer">
          {Like == true ? (
            <IconThumbUpFilled className="scale-[1.4] " />
          ) : (
            <IconThumbUp className=" scale-150" stroke={1} />
          )}
        </label>
      </div>

      <span className="mt-[7px] ">|</span>
      <div className="flex gap-2">
        <span className="mt-1">{disslikeCount}</span>

        <input
          type="checkbox"
          className="hidden"
          onClick={DissLikeHandler}
          id={"Disslike_" + Id}
        />
        <label htmlFor={"Disslike_" + Id} className="cursor-pointer">
          {DissLike == true ? (
            <IconThumbDownFilled className="scale-[1.4] mt-[5px]" />
          ) : (
            <IconThumbDown className=" scale-150 mt-[5px]" stroke={1} />
          )}
        </label>
      </div>
    </div>
  );
}

export { LikeDislike };
