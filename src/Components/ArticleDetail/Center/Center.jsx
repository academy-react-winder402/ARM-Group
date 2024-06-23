import { TopDescription } from "./TopDescription.jsx";
import { Comments } from "./Comments.jsx";
import { useEffect, useState } from "react";
import { getArticleById } from "../../../Core/Services/api/Articlee/GetArticleById.js";
import { useParams } from "react-router-dom";

function Center() {
  const [data, setData] = useState([]);

  const params = useParams();
  const getCard = async () => {
    const articleApi = await getArticleById(params.id);
    setData(articleApi);
    console.log(articleApi);
  };

  useEffect(() => {
    getCard();
  }, []);
  return (
    <div className="container md:w-[400px] lg:w-[600px] xl:w-[700px]">
      {data.detailsNewsDto && <TopDescription data={data.detailsNewsDto} />}
      {data.commentDtos && <Comments data={data.commentDtos} />}
      {/* <Comments /> */}
    </div>
  );
}

export { Center };
