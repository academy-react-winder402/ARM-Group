import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function SelectSort() {
  const [Options] = useState([
    { value: "0", innerHTML: "هیچکدام", defaultHTML: "مرتب سازی" },
    { value: "1", innerHTML: "مورد قابل انتخاب 1" },
    { value: "2", innerHTML: "مورد قابل انتخاب 2" },
    { value: "3", innerHTML: "مورد قابل انتخاب 3" },
  ]);
  const ClickHandler = () => {
    document.querySelectorAll("#SelectSort > div")[0].classList.toggle("show");

    document
      .querySelectorAll("#SelectSort > img")[0]
      .classList.toggle("rotate-180");
  };
  const Select = (value, innerHTML) => {
    document.querySelectorAll("#SelectSort > span")[0].innerHTML = innerHTML;

    let optionsLI = document.querySelectorAll("#SelectSort > div > li");
    for (var x = 0; x < Options.length; x++) {
      optionsLI[x].classList.remove("selected");
    }
    optionsLI[value].classList.add("selected");

    toast(value + "Selcted");
  };

  useEffect(() => {
    document
      .querySelectorAll("#SelectSort > div > li")[0]
      .classList.add("selected");
  }, []);

  return (
    <ul onClick={ClickHandler} id="SelectSort" className="CostumSelect">
      <span>مرتب سازی</span>
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

export default SelectSort;
