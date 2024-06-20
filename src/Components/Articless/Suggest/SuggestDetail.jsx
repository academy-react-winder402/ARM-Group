import { useState, useEffect } from "react";
import { getArticle } from "../../../Core/Services/api/Articlee/GetArticle";

function Detail() {
  const [data, setData] = useState([]);

  const getCard = async () => {
    const articleApi = await getArticle(6, 1);
    setData(articleApi);
    console.log(articleApi);
  };

  useEffect(() => {
    getCard();
  }, []);

  return (
    <>
      {data.map((item, key) => (
        <div key={key}>
          <div className="flex items-center h-[72px]">
            <img
              src="../../../public/Image/Article/bgArticle.png"
              alt="BackGround"
              className="w-[70px] h-[70px] rounded-[8px]"
            />
            <div className="flex flex-col pr-3 gap-3">
              <h3
                className="text-base text-[#434343] dark:text-[#adb5bd] overflow-hidden"
                style={{
                  display: "-webkit-box",
                  maxWidth: "160px",
                  maxHeight: "30px",
                }}
              >
                {item.title}
              </h3>
              <div className="w-[230px] flex gap-4 justify-between">
                <span className="text-[#8A8A8A] text-[10px]">
                  ۲۵ اردیبهشت ۱۴۰۳
                </span>
                <div className="flex gap-4 text-[11px] text-[#8A8A8A]">
                  <div className="flex gap-[6px]">
                    <span>{item.currentLikeCount}</span>
                    <img
                      className="w-[18px] h-4"
                      src="../../../public/Image/Article/heart.png"
                      alt=""
                    />
                  </div>
                  <div className="flex gap-2">
                    <span>۷۶</span>
                    <img
                      className="w-[18px] h-4"
                      src="../../../public/Image/Article/comment.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[150px] h-[2px] bg-[#C4CDD5] mx-auto my-1"></div>
        </div>
      ))}
    </>
  );
}

export { Detail };
