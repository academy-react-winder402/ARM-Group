import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import PN from "persian-number";

function CourseInPageSelect() {
  const [Options] = useState([
    { value: "0", innerHTML: "24" },
    { value: "1", innerHTML: "18" },
    { value: "2", innerHTML: "8" },
  ]);

  const ClickHandler = () => {
    let SelectDiv = document.querySelectorAll("#SelectPerPage > div")[0];
    SelectDiv.classList.toggle("show");

    document
      .querySelectorAll("#SelectPerPage > img")[0]
      .classList.toggle("rotate-180");
  };

  const InnerSelectToPE = () => {
    let CurSpan = document.querySelectorAll("#SelectPerPage > span")[0];
    CurSpan.innerHTML = PN.convertEnToPe(CurSpan.innerHTML.toString());
  };

  const Select = (value, innerHTML) => {
    document.querySelectorAll("#SelectPerPage > span")[0].innerHTML = innerHTML;
    InnerSelectToPE();

    let optionsLI = document.querySelectorAll("#SelectPerPage > div > li");
    for (var x = 0; x < Options.length; x++) {
      optionsLI[x].classList.remove("selected");
    }
    optionsLI[value].classList.add("selected");

    toast(value + "Selcted");
  };

  useEffect(() => {
    document
      .querySelectorAll("#SelectPerPage > div > li")[0]
      .classList.add("selected");

    InnerSelectToPE();
  }, []);

  return (
    <ul
      onClick={ClickHandler}
      id="SelectPerPage"
      className="CostumSelect bg-white"
    >
      <span className="leading-[3.2rem] text-[18px]">24</span>
      <div>
        {Options.map((option, key) => (
          <li
            style={{ textAlign: "center", padding: "0", fontSize: "16px" }}
            key={key}
            onClick={() => {
              Select(option.value, option.innerHTML);
            }}
          >
            {PN.convertEnToPe(option.innerHTML.toString())}
          </li>
        ))}
      </div>
      <img src="./public/Image/Course/SelectArrow.png" alt="" />
    </ul>
  );
}

export default CourseInPageSelect;
