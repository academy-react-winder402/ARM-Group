/* eslint-disable react/prop-types */
import { style } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Pic from "../../../../public/Image/Article/backGround.png";
import "./Style.css";
import { Like } from "./Like.jsx";

function ArticlesCard({ className, data }) {
  const navigate = useNavigate();

  const ClickHandler = () => {
    navigate("/ArticleDetail/" + data.id);
  };

  return (
    <div className={className}>
      <div>
        <img
          onClick={ClickHandler}
          src={`${
            data.currentImageAddressTumb ? data.currentImageAddressTumb : Pic
          }`}
        />
        <div className="grouping">{data.newsCatregoryName}</div>
      </div>
      <div>
        <h2 onClick={ClickHandler}>{data.title}</h2>
        <p onClick={ClickHandler}>{data.miniDescribe}</p>
        <div>
          <div className="author">
            <img src="./Image/Article/backGround.png" />
            <span>{data.addUserFullName}</span>
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
              <Like data={data} />
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
