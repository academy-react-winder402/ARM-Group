import { useEffect } from "react";
import { useState } from "react";
import Badge from "../../../Common/Badge/Badge";

function SelectOstad() {
  const [Options] = useState([
    { value: 0, innerHTML: "همه", defaultHTML: "انتخاب استاد" },
    { value: 1, innerHTML: "استاد 1" },
    { value: 2, innerHTML: "استاد 2" },
    { value: 3, innerHTML: "استاد 3" },
    { value: 4, innerHTML: "استاد 4" },
    { value: 5, innerHTML: "استاد 5" },
  ]);

  const [SelectedOstad, setSelectedOstad] = useState();

  const ClickHandler = () => {
    let SelectDiv = document.querySelectorAll("#SelectOstad > div")[0];
    SelectDiv.classList.toggle("show");

    document
      .querySelectorAll("#SelectOstad > img")[0]
      .classList.toggle("rotate-180");
  };

  const ShowSelectedOsatad = () => {
    let SelectionText;

    switch (SelectedOstad) {
      case 1:
        SelectionText = "یک استاد انتخاب شده";
        break;
      case 2:
        SelectionText = "دو استاد انتخاب شده";
        break;
      case 3:
        SelectionText = "سه استاد انتخاب شده";
        break;
      case 4:
        SelectionText = "چهار استاد انتخاب شده";
        break;
      case 5:
        SelectionText = "پنج استاد انتخاب شده";
        break;
    }
    return SelectionText;
  };

  const Select = (value) => {
    let optionsLI = document.querySelectorAll("#SelectOstad > div > li")[value]
      .classList;

    if (value == 0) {
      setSelectedOstad(0);
      let optionsLIs = document.querySelectorAll("#SelectOstad > div > li");

      /* delete anything Expect All */
      for (var x = 1; x < Options.length; x++) {
        optionsLIs[x].classList.remove("selected");
      }
    } else if (optionsLI.contains("selected")) {
      optionsLI.remove("selected");
      setSelectedOstad(SelectedOstad - 1);
    } else {
      optionsLI.add("selected");
      setSelectedOstad(SelectedOstad + 1);
    }
  };

  /* const DeleteFilterHandler = () => {
    Select(0);
  }; */

  useEffect(() => {
    setSelectedOstad(0);
  }, []);

  useEffect(() => {
    console.log(SelectedOstad);

    const All = document.querySelectorAll("#SelectOstad > div > li")[0]
      .classList;
    if (SelectedOstad == 0) {
      All.add("selected");
    } else {
      All.remove("selected");
    }

    const ShowingInnerHTML = document.querySelectorAll(
      "#SelectOstad > span"
    )[0];
    SelectedOstad > 0
      ? (ShowingInnerHTML.innerHTML = ShowSelectedOsatad())
      : (ShowingInnerHTML.innerHTML = "انتخب استاد");
  }, [SelectedOstad]);

  return (
    <ul onClick={ClickHandler} id="SelectOstad" className="CostumSelect">
      <span>انتخاب استاد</span>
      <div>
        {Options.map((option, key) => (
          <li
            key={key}
            onClick={() => {
              Select(option.value);
            }}
          >
            {option.innerHTML}
          </li>
        ))}
      </div>

      <Badge innerHTML="حذف همه" className="w-fit  Badge" />

      <img src="./public/Image/Course/SelectArrow.png" alt="" />
    </ul>
  );
}

export default SelectOstad;
