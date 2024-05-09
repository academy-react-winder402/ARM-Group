function View() {
  return (
    <>
      <div className="view2">
        <div>
          <img src="../../../public/Image/Article/bgArticle.png" alt="bg" />
        </div>
        <div>
          <h2>عنوان خبر</h2>
          <p>
            متن مرتبط با توضیحات دوره لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ، متن مرتبط با توضیحات دوره لورم ایپسوم متن
            ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
          </p>
          <div>
            <div className="author">
              <img
                src="../../../public/Image/Article/backGround.png"
                alt="bg"
              />
              <span>نویسنده خبر</span>
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
                <span>۱۳۰</span>
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
                  <span>نام نویسنده نظر</span>
                </div>
                <span>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم
                  ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
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
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم
                  ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
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
    </>
  );
}

export { View };
