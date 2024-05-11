import { useState } from "react";

/* redux */
import { useDispatch } from "react-redux";
import { SetCardView } from "../../../../Redux/Slices/CourseFilter";

function ViewSelect() {
  const [Selection, SetSelection] = useState({
    ListBut: "",
    GridBut: "SelectedButView",
    SubClass: "Grid",
  });

  const Dispatch = useDispatch();

  const ListViewHandler = () => {
    SetSelection({ ListBut: "SelectedButView", GridBut: "", SubClass: "List" });
    Dispatch(SetCardView("ListView"));
  };
  const GridViewHandler = () => {
    SetSelection({ ListBut: "", GridBut: "SelectedButView", SubClass: "Grid" });
    Dispatch(SetCardView("GridView"));
  };

  return (
    <>
      <div className="w-full h-full flex gap-4 justify-center">
        <svg
          onClick={ListViewHandler}
          className={Selection.ListBut}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <g id="list" transform="translate(-8 -4.333)">
            <path
              id="Path_61"
              data-name="Path 61"
              d="M7.111,6.667H24.889A1.238,1.238,0,0,0,26,5.333,1.238,1.238,0,0,0,24.889,4H7.111A1.238,1.238,0,0,0,6,5.333,1.238,1.238,0,0,0,7.111,6.667Z"
              transform="translate(2 0.333)"
            />
            <path
              id="Path_62"
              data-name="Path 62"
              d="M24.889,11H7.111A1.238,1.238,0,0,0,6,12.333a1.238,1.238,0,0,0,1.111,1.333H24.889A1.238,1.238,0,0,0,26,12.333,1.238,1.238,0,0,0,24.889,11Z"
              transform="translate(2 2)"
            />
            <path
              id="Path_63"
              data-name="Path 63"
              d="M24.889,18H7.111A1.238,1.238,0,0,0,6,19.333a1.238,1.238,0,0,0,1.111,1.333H24.889A1.238,1.238,0,0,0,26,19.333,1.238,1.238,0,0,0,24.889,18Z"
              transform="translate(2 3.667)"
            />
          </g>
        </svg>

        <svg
          id="apps"
          onClick={GridViewHandler}
          className={Selection.GridBut}
          xmlns="http://www.w3.org/2000/svg"
          width="27.25"
          height="27.25"
          viewBox="0 0 27.25 27.25"
        >
          <path
            id="Path_54"
            data-name="Path 54"
            d="M7.948,0H4.542A4.542,4.542,0,0,0,0,4.542V7.948A4.542,4.542,0,0,0,4.542,12.49H7.948A4.542,4.542,0,0,0,12.49,7.948V4.542A4.542,4.542,0,0,0,7.948,0Zm2.271,7.948a2.271,2.271,0,0,1-2.271,2.271H4.542A2.271,2.271,0,0,1,2.271,7.948V4.542A2.271,2.271,0,0,1,4.542,2.271H7.948a2.271,2.271,0,0,1,2.271,2.271Z"
          />
          <path
            id="Path_55"
            data-name="Path 55"
            d="M20.948,0H17.542A4.542,4.542,0,0,0,13,4.542V7.948a4.542,4.542,0,0,0,4.542,4.542h3.406A4.542,4.542,0,0,0,25.49,7.948V4.542A4.542,4.542,0,0,0,20.948,0Zm2.271,7.948a2.271,2.271,0,0,1-2.271,2.271H17.542a2.271,2.271,0,0,1-2.271-2.271V4.542a2.271,2.271,0,0,1,2.271-2.271h3.406a2.271,2.271,0,0,1,2.271,2.271Z"
            transform="translate(1.76)"
          />
          <path
            id="Path_56"
            data-name="Path 56"
            d="M7.948,13H4.542A4.542,4.542,0,0,0,0,17.542v3.406A4.542,4.542,0,0,0,4.542,25.49H7.948a4.542,4.542,0,0,0,4.542-4.542V17.542A4.542,4.542,0,0,0,7.948,13Zm2.271,7.948a2.271,2.271,0,0,1-2.271,2.271H4.542a2.271,2.271,0,0,1-2.271-2.271V17.542a2.271,2.271,0,0,1,2.271-2.271H7.948a2.271,2.271,0,0,1,2.271,2.271Z"
            transform="translate(0 1.76)"
          />
          <path
            id="Path_57"
            data-name="Path 57"
            d="M20.948,13H17.542A4.542,4.542,0,0,0,13,17.542v3.406a4.542,4.542,0,0,0,4.542,4.542h3.406a4.542,4.542,0,0,0,4.542-4.542V17.542A4.542,4.542,0,0,0,20.948,13Zm2.271,7.948a2.271,2.271,0,0,1-2.271,2.271H17.542a2.271,2.271,0,0,1-2.271-2.271V17.542a2.271,2.271,0,0,1,2.271-2.271h3.406a2.271,2.271,0,0,1,2.271,2.271Z"
            transform="translate(1.76 1.76)"
          />
        </svg>

        <svg
          className={Selection.SubClass}
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="5"
          viewBox="0 0 10 5"
        >
          <path
            id="Subtraction_1"
            data-name="Subtraction 1"
            d="M-2682,5h-10a5.006,5.006,0,0,1,5-5,5.006,5.006,0,0,1,5,5Z"
            transform="translate(2692)"
            fill="#91accf"
          />
        </svg>
      </div>
    </>
  );
}

export default ViewSelect;