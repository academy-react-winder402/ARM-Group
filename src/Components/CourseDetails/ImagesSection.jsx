import React, { useState } from "react";
import BigImage from "./BigImage";
import LittleImages from "./LittleImages";

const ImagesSection = () => {
  const [mapList, setMapList] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ]);
  return (
    <div className="w-[50%] mb-[1rem]">
      <BigImage />
      {/* <div className="px-[35px] flex flex-row flex-nowrap justify-between gap-[15px] mt-[35px]">
        {mapList.map((item, key) => {
          return <LittleImages key={key} />;
        })}
      </div> */}
    </div>
  );
};

export default ImagesSection;
