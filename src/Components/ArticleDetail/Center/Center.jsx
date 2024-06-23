import { TopDescription } from "./TopDescription.jsx";
import { Comments } from "./Comments.jsx";
import { useEffect, useState } from "react";
// import { getArticle } from "../../../Core/Services/api/Articlee/GetArticle.js";

function Center() {
  // const [data, setData] = useState([]);

  // const getCard = async () => {
  //   const articleApi = await getArticle();
  //   setData(articleApi);
  // };

  // useEffect(() => {
  //   getCard();
  // }, []);
  return (
    <div className="container md:w-[400px] lg:w-[600px] xl:w-[700px]">
      <TopDescription />
      <Comments />
    </div>
  );
}

export { Center };
