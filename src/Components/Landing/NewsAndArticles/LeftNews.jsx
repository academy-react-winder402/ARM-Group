import React from "react";
import { LeftNewsSections } from "./LeftNewsSections";

export const LeftNews = () => {
  return (
    <div className="flex flex-nowrap gap-[30px]">
      <div className="flex flex-col justify-between">
        <LeftNewsSections />
        <LeftNewsSections />
        <LeftNewsSections />
      </div>
    </div>
  );
};
