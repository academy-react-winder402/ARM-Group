/* eslint-disable react/prop-types */
function ArticlesCard({ className, data }) {
  return (
    <div className={className}>
      <div>
        <img src="../../../public/Image/Article/bgArticle.png" alt="bg" />
        <div className="grouping">{data.newsCatregoryName}</div>
      </div>
      <div>
        <h2>{data.title}</h2>
        <p>{data.miniDescribe}</p>
        <div>
          <div className="author">
            <img src="../../../public/Image/Article/backGround.png" alt="bg" />
            <span>{data.addUserFullName}</span>
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
              <span>{data.currentLikeCount}</span>
              <img src="../../../public/Image/Course/heart.png" alt="like" />
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
                <span>{data.addUserFullName}</span>
              </div>
              <span>{data.miniDescribe}</span>
            </div>
          </div>
        </div>
        <div className="lastCommentView3">
          <span>آخرین نظرات</span>
          <div>
            <img src="../../../public/Image/Article/bgArticle.png" alt="" />
            <div>
              <span>{data.addUserFullName}</span>
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
  );
}

export default ArticlesCard;
