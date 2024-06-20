import { useState, useEffect } from "react";
import { getArticle } from "../../Core/Services/api/Articlee/GetArticle";

function ViewLeft() {
  const [data, setData] = useState([]);

  const getCard = async () => {
    const articleApi = await getArticle(3, 1);
    setData(articleApi);
    console.log(articleApi);
  };

  useEffect(() => {
    getCard();
  }, []);

  return (
    <>
      {data.map((item, key) => (
        <div className="view1" key={key}>
          <div>
            <img src="../../../public/Image/Article/bgArticle.png" alt="bg" />
            <div className="grouping">{item.newsCatregoryName}</div>
          </div>
          <div>
            <h2>{item.title}</h2>
            <p>{item.miniDescribe}</p>
            <div>
              <div className="author">
                <img
                  src="../../../public/Image/Article/backGround.png"
                  alt="bg"
                />
                <span>{item.addUserFullName}</span>
              </div>
              <div className="score">
                <div className="comment">
                  <span>۷۶</span>
                  <img
                    src="../../../public/Image/Course/comment.png"
                    alt="comment"
                  />
                </div>
                <div className="like">
                  <span>{item.currentLikeCount}</span>
                  <img
                    src="../../../public/Image/Course/heart.png"
                    alt="like"
                  />
                </div>
              </div>
            </div>
            <div className="lastComment">
              <p>آخرین نظرات</p>
              <div className="child">
                <div>
                  <div dir="ltr">
                    <img
                      src="../../../public/Image/Article/backGround.png"
                      alt="Comment"
                    />
                    <span>نام نویسنده نظر</span>
                  </div>
                  <span>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                  </span>
                </div>
                <div>
                  <div dir="ltr">
                    <img
                      src="../../../public/Image/Article/backGround.png"
                      alt="Comment"
                    />
                    <span>نام نویسنده نظر</span>
                  </div>
                  <span>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                  </span>
                </div>
              </div>
            </div>
            <div className="lastCommentView3">
              <span>آخرین نظرات</span>
              <div>
                <img src="../../../public/Image/Article/bgArticle.png" alt="" />
                <div>
                  <span>نام نویسنده نظر</span>
                  <span>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                  </span>
                </div>
              </div>
            </div>
            <div className="date">
              <img src="../../../public/Image/Course/date.png" alt="" />
              <span>۲۵ اردیبهشت ۱۴۰۳ </span>
              <div></div>
              <span>۳ روز پیش</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export { ViewLeft };
