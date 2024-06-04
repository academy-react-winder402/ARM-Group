/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "../Style/style.css";
import { CommentDetail } from "./CommentDetail.jsx";
import { useSelector } from "react-redux";

function Comments(props) {
  const Details = useSelector((state) => state.CourseDetail.CourseObj);

  useEffect(() => {
    let DefCheck = document.getElementById("RadioA");
    DefCheck.checked = true;
  }, []);

  return (
    <div>
      <div className="h-fit bg-white rounded-[15px] shadow-lg px-[14px] py-5">
        <div className="flex justify-between ">
          <h3 className="text-xl text-textColor w-20">نظرات</h3>
          <div className="comments w-[250px] h-7">
            <input id="RadioA" type="radio" name="Radio" />
            <label htmlFor="RadioA">تعداد لایک</label>-
            <input id="RadioB" type="radio" name="Radio" />
            <label htmlFor="RadioB">قدیمی ترین</label>-
            <input id="RadioC" type="radio" name="Radio" />
            <label htmlFor="RadioC">جدید ترین</label>
          </div>
          <div className="w-[120px] text-textColor h-7 flex gap-2 items-center">
            <span className="text-xl">{props.CommentObj.length}</span>
            <span className="text-sm">نظر ثبت شده</span>
          </div>
        </div>

        <img
          src="../../../../public/Image/ArticleDetail/Line.png"
          alt="Line"
          className="mt-6"
        />

        {props.CommentObj.map((item, key) => (
          <CommentDetail key={key} CommentObj={item} />
        ))}
      </div>
    </div>
  );
}

export { Comments };
