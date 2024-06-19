import { View } from "./View.jsx";
import { NewsAlgoritm } from "./Suggest/NewsAlgoritm/NewsAlgoritm.jsx";
import { useState, useEffect } from "react";
import { getArticle } from "../../Core/Services/api/Articlee/GetArticle.js";

function Details() {
  const [data, setData] = useState([]);

  const getCard = async () => {
    const articleApi = await getArticle();
    setData(articleApi);
    console.log(articleApi);
    // console.log(articles);
  };

  useEffect(() => {
    getCard();
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-4">
      {/* <View /> */}
      <NewsAlgoritm data={data} />
    </div>
  );
}

export { Details };
