import PriceFilter from "./PriceFilter";
import Search from "../../../Common/Search";
import Modal from "./TimeFilter/Modal/Modal";
import CustomSelect from "../../../Common/FilterSelectOption";
import { useEffect, useState } from "react";
import Butt from "./TimeFilter/Butt";

/* Redux */
import { useSelector } from "react-redux";
import {
  SetCourseLevel,
  SetSearch,
} from "../../../../Redux/Slices/CourseFilter";

/* Apis */
import { GetAllTeacher } from "../../../../Core/Services/api/Course/GetAllTeacher";
import { GetTechnologies } from "../../../../Core/Services/api/Course/GetTechnologies";
import { GetLevels } from "../../../../Core/Services/api/Course/GetLevels";

function Index() {
  const DeleteStatus = useSelector((state) => state.CourseFilter.DeleteAll);

  const [Options_Levels, SetOptions_Levels] = useState([{}]);
  const [Options_Ostad, setOptions_Ostad] = useState([{}]);
  const [Options_Category, setOptions_Category] = useState([{}]);

  const GetTeacher = async () => {
    const Teachers = await GetAllTeacher();
    let TeacherObj = [
      { value: 0, id: 0, innerHTML: "همه", defaultHTML: "انتخاب استاد" },
    ];
    Teachers.map((item, key) => {
      TeacherObj.push({
        value: key + 1,
        TeacherId: item.teacherId,
        innerHTML: item.fullName,
      });
    });
    setOptions_Ostad(TeacherObj);
  };
  const GetCategory = async () => {
    const Technologies = await GetTechnologies();
    let TechnologiesObj = [
      { value: 0, id: 0, innerHTML: "همه", defaultHTML: "دسته بندی" },
    ];
    Technologies.map((item, key) => {
      TechnologiesObj.push({
        value: key + 1,
        id: item.id,
        innerHTML: item.techName,
      });
    });
    setOptions_Category(TechnologiesObj);
  };
  const GetCourseLevels = async () => {
    const Levels = await GetLevels();
    let LevelsObj = [
      { value: 0, id: 0, innerHTML: "همه", defaultHTML: "سطح دوره" },
    ];
    Levels.map((item, key) => {
      LevelsObj.push({
        value: key + 1,
        id: item.id,
        innerHTML: item.levelName,
      });
    });
    SetOptions_Levels(LevelsObj);
  };

  useEffect(() => {
    GetTeacher();
    GetCategory();
    GetCourseLevels();
  }, []);

  return (
    <div className=" FilterSecton_1 ">
      <input id="F/[1]" name="RadioInputs" type="radio" />
      <label className="max-w-[400px] min-w-[190px]" htmlFor="F/[1]">
        <Search DeleteStatus={DeleteStatus} SetSearchState={SetSearch} />
      </label>

      <input id="F/[2]" name="RadioInputs" type="radio" />
      <label className="max-w-[220px] min-w-[50px]" htmlFor="F/[2]">
        <CustomSelect
          DeleteStatus={DeleteStatus}
          Options={Options_Category}
          type="MultiSelect"
          MultiSelectName="دسته بندی"
          Id="SelectCategorie"
        />
      </label>

      <input id="F/[3]" name="RadioInputs" type="radio" />
      <label className="max-w-[220px] min-w-[50px]" htmlFor="F/[3]">
        <CustomSelect
          DeleteStatus={DeleteStatus}
          Options={Options_Ostad}
          type="MultiSelect"
          MultiSelectName="استاد"
          Id="SelectOstad"
        />
      </label>

      <input id="F/[4]" name="RadioInputs" type="radio" />
      <label className="max-w-[160px] min-w-[50px]" htmlFor="F/[4]">
        <CustomSelect
          DeleteStatus={DeleteStatus}
          Options={Options_Levels}
          type="SimpleSelect"
          Id="SelectSort"
          SetFilter={SetCourseLevel}
        />
      </label>

      <input id="F/[6]" name="RadioInputs" type="radio" />
      <label className="max-w-[130px] min-w-[100px]" htmlFor="F/[6]">
        <Butt />
        <Modal />
      </label>

      <input id="F/[5]" name="RadioInputs" type="radio" />
      <label
        className="max-w-[400px] min-w-[240px] "
        style={{ backgroundColor: "transparent" }}
        htmlFor="F/[5]"
      >
        <PriceFilter />
      </label>
    </div>
  );
}

export default Index;
