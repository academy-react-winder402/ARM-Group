/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Badge from "../Badge/Badge";
import { useDispatch } from "react-redux";

function Index(props) {
  const Options = props.Options;
  const Id = props.Id;
  const [SelectedOptions, setSelectedOptions] = useState(0);
  const SelectObj = [];
  const dispatch = useDispatch();

  const ClickHandler = () => {
    let SelectDiv = document.querySelectorAll("#" + Id + " > div")[0];

    SelectDiv.classList.toggle("show");

    document
      .querySelectorAll("#" + Id + " > img")[0]
      .classList.toggle("rotate-180");
  };
  const ShowSelectedOptions = () => {
    let SelectionText;
    let BaseText = props.MultiSelectName + " انتخاب شده";

    switch (SelectedOptions) {
      case 1:
        SelectionText = " یک " + BaseText;
        break;
      case 2:
        SelectionText = " دو " + BaseText;
        break;
      case 3:
        SelectionText = " سه " + BaseText;
        break;
      case 4:
        SelectionText = " چهار " + BaseText;
        break;
      case 5:
        SelectionText = " پنج " + BaseText;
        break;
    }
    return SelectionText;
  };

  const Select = (value, innerHTML) => {
    document.querySelectorAll("#" + Id + " > span")[0].innerHTML = innerHTML;
    const CurrentCheck = document.querySelectorAll(
      "#" + Id + " > div > li >  input"
    );

    const optionsLI = document.querySelectorAll("#" + Id + " > div > li");

    if (props.type === "MultiSelect") {
      if (value == 0) {
        setSelectedOptions(0);
        let optionsLIs = document.querySelectorAll("#" + Id + " > div > li");

        /* delete anything Expect All */
        for (var x = 1; x < Options.length; x++) {
          optionsLIs[x].classList.remove("selected");
        }
      } else if (optionsLI[value].classList.contains("selected")) {
        optionsLI[value].classList.remove("selected");
        setSelectedOptions(SelectedOptions - 1);
      } else {
        optionsLI[value].classList.add("selected");
        setSelectedOptions(SelectedOptions + 1);
      }

      /* SetForRedux */
      if (value > 0) {
        if (CurrentCheck[value].checked == false) {
          CurrentCheck[value].checked = true;
        } else {
          CurrentCheck[value].checked = false;
        }
        for (let i = 1; i < Options.length; i++) {
          if (CurrentCheck[i].checked) {
            SelectObj.push(Options[i].id);
          }
        }
      }
      if (value == 0) {
        for (let i = 0; i < Options.length; i++) {
          CurrentCheck[i].checked = false;
        }
      }
      console.log(SelectObj);
      props.SetFilter ? dispatch(props.SetFilter(SelectObj)) : null;
    }

    if (props.type == "SimpleSelect") {
      if (value == 0) {
        document.querySelectorAll("#" + Id + " > span")[0].innerHTML =
          Options[0].defaultHTML;
      }

      Options.map((items, key) => {
        optionsLI[key].classList.remove("selected");
      });

      optionsLI[value].classList.add("selected");

      props.SetFilter ? dispatch(props.SetFilter(Options[value].id)) : null;
    }
  };

  const DeleteFilterHandler = () => {
    Select(0);
    let SelectDiv = document.querySelectorAll("#" + Id + " > div")[0];
    SelectDiv.classList.toggle("show");
  };

  useEffect(() => {
    document
      .querySelectorAll("#" + Id + " > div > li")[0]
      .classList.add("selected");
  }, []);

  useEffect(() => {
    if (props.DeleteStatus == true) {
      Select(0, Options[0].defaultHTML);
    }
  }, [props.DeleteStatus]);

  useEffect(() => {
    //console.log(SelectedOptions);

    const All = document.querySelectorAll("#" + Id + " > div > li")[0]
      .classList;
    if (SelectedOptions == 0) {
      All.add("selected");
    } else {
      All.remove("selected");
    }

    const ShowingInnerHTML = document.querySelectorAll("#" + Id + " > span")[0];
    SelectedOptions > 0
      ? (ShowingInnerHTML.innerHTML = ShowSelectedOptions())
      : (ShowingInnerHTML.innerHTML = Options[0].defaultHTML);
  }, [SelectedOptions]);

  return (
    <ul
      style={
        props.IsNumberType && {
          cursor: "pointer",
          fontSize: "20px",
          fontWeight: "bold",
        }
      }
      onClick={ClickHandler}
      id={Id}
      className={
        "CostumSelect " +
        (props.type === "MultiSelect" && SelectedOptions > 0 && "pl-[95px]")
      }
    >
      <span>{Options[0].defaultHTML}</span>
      <div>
        {Options.map((option, key) => (
          <li
            key={key}
            style={
              props.IsNumberType && {
                cursor: "pointer",
                textAlign: "center",
                padding: "0px",
              }
            }
            onClick={() => {
              Select(option.value, option.innerHTML);
            }}
          >
            {option.innerHTML}
            <input key={"Input@" + key} type="checkbox" className="hidden" />
          </li>
        ))}
      </div>
      {SelectedOptions > 0 ? (
        <Badge
          innerHTML="حذف همه"
          className="w-fit Badge absolute left-5 "
          Size="Small"
          onClick={DeleteFilterHandler}
        />
      ) : null}
      <img src="../../../../public/Image/Course/SelectArrow.png" alt="" />
    </ul>
  );
}

export default Index;
