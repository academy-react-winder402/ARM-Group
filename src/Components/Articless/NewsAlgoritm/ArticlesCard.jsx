/* eslint-disable react/prop-types */
import { style } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ArticlesCard({ className, data, teacherImg }) {
  const navigate = useNavigate();

  const ClickHandler = () => {
    navigate("/ArticleDetail/");
  };

  return (
    <div className={className}>
      <div>
        <img
          className="bg-[#868e96]"
          onClick={ClickHandler}
          src={`${
            data.currentImageAddressTumb ? data.currentImageAddressTumb : ""
          }`}
        />
        <div className="grouping">{data.newsCatregoryName}</div>
      </div>
      <div>
        <h2 onClick={ClickHandler}>{data.title}</h2>
        <p onClick={ClickHandler}>{data.miniDescribe}</p>
        <div>
          <div className="author">
            <img
              src={
                "https://classapi.sepehracademy.ir/\\Pictures\\ProfileImageThumbnail\\photo_2024-05-12_20-55-14_4b0e7469-755c-4e16-8709-7e675c9852bf.jpg"
              }
            />
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
            <img src={data.addUserProfileImage} alt="" />
            <div>
              <span>{data.addUserFullName}</span>
              <span>{data.miniDescribe}</span>
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
