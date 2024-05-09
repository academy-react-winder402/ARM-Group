/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function SelectCategorie({ DeleteStatus }) {
  const [Options] = useState([
    { value: "0", innerHTML: "همه", defaultHTML: "دسته بندی" },
    { value: "1", innerHTML: "مورد قابل انتخاب 1" },
    { value: "2", innerHTML: "مورد قابل انتخاب 2" },
    { value: "3", innerHTML: "مورد قابل انتخاب 3" },
  ]);

  const ClickHandler = () => {
    let SelectDiv = document.querySelectorAll("#SelectCategorie > div")[0];
    SelectDiv.classList.toggle("show");

    document
      .querySelectorAll("#SelectCategorie > img")[0]
      .classList.toggle("rotate-180");
  };

  const Select = (value, innerHTML) => {
    document.querySelectorAll("#SelectCategorie > span")[0].innerHTML =
      innerHTML;

    let optionsLI = document.querySelectorAll("#SelectCategorie > div > li");

    Options.map((items, key) => {
      optionsLI[key].classList.remove("selected");
    });
    /* for (var x = 0; x < Options.length; x++) {
      optionsLI[x].classList.remove("selected");
    } */

    optionsLI[value].classList.add("selected");

    /* toast(value + "Selcted"); */
  };

  useEffect(() => {
    document
      .querySelectorAll("#SelectCategorie > div > li")[0]
      .classList.add("selected");
  }, []);

  useEffect(() => {
    if (DeleteStatus == true) {
      Select(0, "دسته بندی");
    }
  }, [DeleteStatus]);

  return (
    <ul onClick={ClickHandler} id="SelectCategorie" className="CostumSelect">
      <span>دسته بندی</span>
      <div>
        {Options.map((option, key) => (
          <li
            key={key}
            onClick={() => {
              Select(
                option.value,
                option.defaultHTML ? option.defaultHTML : option.innerHTML
              );
            }}
          >
            {option.innerHTML}
          </li>
        ))}
      </div>
      <img src="./public/Image/Course/SelectArrow.png" alt="" />
    </ul>
  );
}

export default SelectCategorie;
