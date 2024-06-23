import { useState, useEffect } from "react";
import { getArticle } from "../../Core/Services/api/Articlee/GetArticle";
import Pic from "../../../public/Image/Article/backGround.png";
import { Like } from "../Articless/NewsAlgoritm/Like.jsx";

function ViewRight() {
  const [data, setData] = useState([]);

  const getCard = async () => {
    const articleApi = await getArticle(2, 3);
    setData(articleApi);
    // console.log(articleApi);
  };

  useEffect(() => {
    getCard();
  }, []);

  return (
    <>
      {data.map((item, key) => (
        <div className="view1" key={key}>
          <div>
            <img
              src={`${
                item.currentImageAddressTumb
                  ? item.currentImageAddressTumb
                  : Pic
              }`}
            />
            <div className="grouping">{item.newsCatregoryName}</div>
          </div>
          <div>
            <h2>{item.title}</h2>
            <p>{item.miniDescribe}</p>
            <div>
              <div className="author">
                <img src="../../../public/Image/Article/backGround.png" />
                <span>{item.addUserFullName}</span>
              </div>
              <div
                className="score"
                style={{
                  fontFamily: "IransnsNumber",
                }}
              >
                <div className="comment">
                  <span>--</span>
                  <img
                    src="../../../public/Image/Course/comment.png"
                    alt="comment"
                  />
                </div>
                <div className="like">
                  <Like data={item} />
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
                    <span>{item.addUserFullName}</span>
                  </div>
                  <span>{item.miniDescribe}</span>
                </div>
              </div>
            </div>
            <div className="lastCommentView3">
              <span>آخرین نظرات</span>
              <div>
                <img src={item.addUserProfileImage} alt="" />
                <div>
                  <span>{item.addUserFullName}</span>
                  <span>{item.miniDescribe}</span>
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

export { ViewRight };
