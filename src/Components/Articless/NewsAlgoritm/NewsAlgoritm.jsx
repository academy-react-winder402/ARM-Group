/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import * as React from "react";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import ArticlesCard from "./ArticlesCard.jsx";

const NewsAlgoritm = ({ data }) => {
  const [dataToShow, setDataToShow] = useState([]);
  const [cols, setCols] = useState([1]);

  const gap = "16px";
  const trendAndPopularePercent = 0.35;
  const isCol2 = useMediaQuery({ minWidth: 640, maxWidth: 767 });
  const isCol3 = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isCol4 = useMediaQuery({ minWidth: 1024, maxWidth: 1279 });
  const isCol5 = useMediaQuery({ minWidth: 1280 });

  useEffect(() => {
    let newCol = 1;
    if (isCol2) newCol = 2;
    if (isCol3) newCol = 3;
    if (isCol4) newCol = 4;
    if (isCol5) newCol = 5;
    setCols(newCol);
  }, [isCol2, isCol3, isCol4, isCol5]);

  const variant1 = (data) => {
    return <ArticlesCard className="view1" data={data} />;
  };
  const variant2 = (data) => {
    return <ArticlesCard className="view3" data={data} />;
  };

  const variant3 = (data) => {
    return <ArticlesCard className="view2 " data={data} />;
  };

  const variants = [variant1, variant2, variant3];
  const renderVariants = (variantNum, data) => {
    return (
      <div className=" relative  min-h-60">
        <div
          className={
            " sm:absolute top-0 right-0 min-h-60 max-sm:flex justify-center rounded-lg " +
            (variantNum == 2 ? `w-[calc(200%+${gap})]` : "w-full")
          }
        >
          {variantNum > 0 ? variants[variantNum - 1](data) : <div></div>}
        </div>
      </div>
    );
  };

  const calculateVariant = (data, cols) => {
    const otherVariantCount = Math.min(
      Math.round((data.length * trendAndPopularePercent + data.length) / cols) *
        cols -
        data.length,
      data.length
    );

    let maxLike = -1;
    let maxComment = -1;
    for (let index = 0; index < data.length; index++) {
      if (data[index].currentLikeCount > maxLike)
        maxLike = data[index].currentLikeCount;
      if (data[index].currentView > maxComment)
        maxComment = data[index].currentView;
      data[index]["index"] = index;
      data[index]["variant"] = 1;
    }
    if (cols === 1) return data;
    const cloneList = JSON.parse(JSON.stringify(data));
    const resultList = JSON.parse(JSON.stringify(data));
    cloneList.sort(
      (a, b) =>
        Math.max(b.currentLikeCount / maxLike, b.currentView / maxComment) -
        Math.max(a.currentLikeCount / maxLike, a.currentView / maxComment)
    );

    for (let index = 0; index < otherVariantCount; index++) {
      const dataIndex = cloneList[index].index;
      const temp = resultList[dataIndex];
      resultList[dataIndex]["variant"] =
        temp.currentLikeCount / maxLike > temp.currentView / maxComment ? 2 : 3;
    }
    return resultList;
  };
  const orgnizeDate = (data, cols) => {
    const emptyElement = { variant: 0 };
    const regularData = [];
    const otherData = [];
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      if (element.variant === 1) regularData.push(element);
      else otherData.push(element);
    }

    const resultData = [
      ...Array(regularData.length + otherData.length * 2).fill(""),
    ];
    const length = resultData.length;

    for (let index = 0; index < otherData.length; index++) {
      const start = Math.floor(Math.random() * length);

      for (let j = start + 1; j != start; j = (j + 1) % length) {
        if (
          resultData[j] === "" &&
          (otherData[index].variant != 2 ||
            ((j + 1) % cols != 0 && resultData[j + 1] === "")) &&
          (otherData[index].variant != 3 ||
            (!(j + cols >= length) && resultData[j + cols] === ""))
        ) {
          resultData[j] = otherData[index];
          if (otherData[index].variant == 2) resultData[j + 1] = emptyElement;
          if (otherData[index].variant == 3)
            resultData[j + cols] = emptyElement;
          break;
        }
      }
    }

    let indexRegular = 0;
    let indexResult = 0;
    while (
      indexRegular < regularData.length &&
      indexResult < resultData.length
    ) {
      if (resultData[indexResult] == "") {
        resultData[indexResult] = regularData[indexRegular];
        indexRegular++;
      }
      indexResult++;
    }
    console.log(resultData);

    return resultData;
  };
  const normalizeData = (data, cols) => {
    const test = calculateVariant(data, cols);
    const result = orgnizeDate(test, cols);
    setDataToShow(result);
  };

  useEffect(() => {
    normalizeData(data, cols);
  }, [data, cols]);

  return (
    <div
      dir="rtl"
      className={
        `gap-[${gap}]` +
        " grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-4"
      }
    >
      {dataToShow.map((item) => renderVariants(item.variant, item))}
    </div>
  );
};

export { NewsAlgoritm };
