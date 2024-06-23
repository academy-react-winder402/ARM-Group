/* eslint-disable no-unused-vars */
import { Subject } from "../Common/Landing/Subject.jsx";
import { Details } from "./Details.jsx";
import { Index } from "./Suggest/Index.jsx";
import Filter from "./Filter/index.jsx";

import { useState, useEffect } from "react";
import { getArticle } from "../../Core/Services/api/Articlee/GetArticle.js";
// import { getArticleById } from "../../Core/Services/api/Articlee/GetArticleById.js";

function Articles() {
  const [data, setData] = useState([]);
  // const [NothingFound, setNothingFound] = useState(false);

  // const GetArticle = async (id) => {
  // setArticle([]);
  //   const Articles = await getArticleById(id);

  //   setData(Articles.detailsNewsDto);
  //   console.log(Articles);
  // setTimeout(() => {

  //   if (Articles.courseFilterDtos.length == 0) {
  //     setNothingFound(true);
  //   } else setNothingFound(false);
  // }, 500);

  // window.scrollTo({
  //   top: 0,
  //   behavior: "smooth",
  // });
  // };

  // useEffect(() => {
  //   GetArticle();
  // }, []);

  const getCard = async () => {
    const articleApi = await getArticle(1700, 1);
    setData(articleApi);
    console.log(articleApi);
  };

  useEffect(() => {
    getCard();
  }, []);
  return (
    <div
      className="container max-sm:w-[400px] w-[1120px] mx-auto mt-[80px]"
      style={{ direction: "rtl" }}
    >
      <div className="text-center">
        <Subject
          title="اخبار و مقالات"
          description="متن مرتبط با بخش خبر  ها"
        />
      </div>

      <Filter />

      <Details data={data} />
      <Index />
    </div>
  );
}

export default Articles;
