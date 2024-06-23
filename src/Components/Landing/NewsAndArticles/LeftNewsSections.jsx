import React from "react";

export const LeftNewsSections = ({ data }) => {
  return (
    <>
      {data.map((item, key) => (
        <div className="flex gap-5 h-[125px]" key={key}>
          <div className="w-[160px] rounded-[15px] shadow-md">
            <img
              src="../../../../public/Image/Article/backGround.png"
              className="h-full"
              alt=""
            />
          </div>
          <div className="w-[310px] flex gap-2 flex-col">
            <span className="bg-[#7B7B7B] text-white flex items-center justify-center w-[75px] h-[20px] text-[10px] rounded-[13px]">
              {item.newsCatregoryName}
            </span>
            <p className="text-[#777777] text-[14px] text-right pr-4 leading-6">
              {item.title}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-[42px] h-[42px] rounded-full shadow-md">
                <img src={data.addUserProfileImage} alt="" />
              </div>
              <span className="text-[#787878] text-[14px]">
                {item.addUserFullName}
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
