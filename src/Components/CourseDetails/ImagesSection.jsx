import BigImage from "./BigImage";
import { LikeDislike } from "../Common/LikeDissLike/LikeDislike.jsx";
import { useEffect, useState } from "react";
import { Rating } from "@mui/material";
import { useSelector } from "react-redux";

const ImagesSection = () => {
  const Details = useSelector((state) => state.CourseDetail.CourseObj);
  const [Ratevalue, setRateValue] = useState();
  const [LikeValue, setLikeValue] = useState();
  const [DissLikeValue, setDissLikeValue] = useState();

  useEffect(() => {
    setRateValue(Details.currentRate);
    setLikeValue(1);
    setDissLikeValue(2);
  }, []);

  return (
    <div className="w-[50%] mb-[1rem]">
      <BigImage />
      <div className="mt-6 flex flex-row-reverse">
        <LikeDislike
          likeCount={LikeValue}
          disslikeCount={DissLikeValue}
          Id={Details.CourseId}
        />
        <div dir="ltr" className="ml-5">
          <Rating
            name="simple-controlled"
            value={Ratevalue}
            onChange={(event, newValue) => {
              setRateValue(newValue);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ImagesSection;
