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
  SetTeacher,
  SetSorting,
  SetCategory,
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
  const [Options_Sord] = useState([
    { value: 0, id: "", innerHTML: "هیچکدام", defaultHTML: "مرتب سازی" },
    { value: 1, id: "Active", innerHTML: "دوره های فعال" },
    { value: 2, id: "LastUpdate", innerHTML: "آخرین تغییرات" },
    { value: 3, id: "Cost", innerHTML: "بر اساس قیمت" },
    { value: 4, id: "CourseRate", innerHTML: "بر اساس محبوبیت " },
  ]);

  const GetTeacher = async () => {
    const Teachers = await GetAllTeacher();
    let TeacherObj = [
      { value: 0, id: 0, innerHTML: "هیچکدام", defaultHTML: "انتخاب استاد" },
    ];
    Teachers.map((item, key) => {
      TeacherObj.push({
        value: key + 1,
        id: item.teacherId,
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
    <>
      <div className=" FilterSecton_1 ">
        {/* Search */}
        <input id="F/[1]" name="RadioInputs" type="radio" />
        <label className="max-w-[500px] min-w-[400px]" htmlFor="F/[1]">
          <Search DeleteStatus={DeleteStatus} SetSearchState={SetSearch} />
        </label>

        {/* Select Ostad */}
        <input id="F/[3]" name="RadioInputs" type="radio" />
        <label className="max-w-[220px] min-w-[50px]" htmlFor="F/[3]">
          <CustomSelect
            DeleteStatus={DeleteStatus}
            Options={Options_Ostad}
            type="SimpleSelect"
            Id="SelectOstad"
            SetFilter={SetTeacher}
          />
        </label>

        {/* Select Level */}
        <input id="F/[4]" name="RadioInputs" type="radio" />
        <label className="max-w-[220px] min-w-[50px]" htmlFor="F/[4]">
          <CustomSelect
            DeleteStatus={DeleteStatus}
            Options={Options_Levels}
            type="SimpleSelect"
            Id="SelectLevel"
            SetFilter={SetCourseLevel}
          />
        </label>

        {/* Select Sort */}
        <input id="F/[7]" name="RadioInputs" type="radio" />
        <label className="max-w-[220px] min-w-[50px]" htmlFor="F/[7]">
          <CustomSelect
            DeleteStatus={DeleteStatus}
            Options={Options_Sord}
            type="SimpleSelect"
            Id="SelectSort"
            SetFilter={SetSorting}
          />
        </label>

        {/* Select Time Filter */}
        <input id="F/[6]" name="RadioInputs" type="radio" />
        <label className="max-w-[130px] min-w-[100px]" htmlFor="F/[6]">
          <Butt />
          <Modal />
        </label>
      </div>
      <div className=" FilterSecton_1 mt-2 w-[800px] m-auto">
        {/* Select Level */}
        <input id="F/[11]" name="RadioInputs" type="radio" />
        <label className="max-w-[260px] min-w-[100px]" htmlFor="F/[11]">
          <CustomSelect
            DeleteStatus={DeleteStatus}
            Options={Options_Category}
            type="MultiSelect"
            MultiSelectName="دسته بندی"
            Id="SelectCategory"
            SetFilter={SetCategory}
          />
        </label>

        {/* Pirce FIlter */}
        <input id="F/[12]" name="RadioInputs" type="radio" />
        <label
          className="max-w-[600px] min-w-[260px] "
          style={{ backgroundColor: "transparent" }}
          htmlFor="F/[12]"
        >
          <PriceFilter />
        </label>
      </div>
    </>
  );
}

export default Index;
