import PriceFilter from "./PriceFilter";
//import Search from "./Search";
import Search from "../../../Common/Search";
import Modal from "./TimeFilter/Modal/Modal";
import CustomSelect from "../../../Common/FilterSelectOption";
import { useState } from "react";
import Butt from "./TimeFilter/Butt";

/* Redux */
import { useSelector } from "react-redux";

function Index() {
  const DeleteStatus = useSelector((state) => state.CourseFilter.DeleteAll);
  const [Options_Category] = useState([
    { value: "0", innerHTML: "همه", defaultHTML: "دسته بندی" },
    { value: "1", innerHTML: "مورد قابل انتخاب 1" },
    { value: "2", innerHTML: "مورد قابل انتخاب 2" },
    { value: "3", innerHTML: "مورد قابل انتخاب 3" },
  ]);
  const [Options_Sort] = useState([
    { value: "0", innerHTML: "هیچکدام", defaultHTML: "مرتب سازی" },
    { value: "1", innerHTML: "مورد قابل انتخاب 1" },
    { value: "2", innerHTML: "مورد قابل انتخاب 2" },
    { value: "3", innerHTML: "مورد قابل انتخاب 3" },
  ]);
  const [Options_Ostad] = useState([
    { value: 0, innerHTML: "همه", defaultHTML: "انتخاب استاد" },
    { value: 1, innerHTML: "استاد 1" },
    { value: 2, innerHTML: "استاد 2" },
    { value: 3, innerHTML: "استاد 3" },
    { value: 4, innerHTML: "استاد 4" },
    { value: 5, innerHTML: "استاد 5" },
  ]);

  return (
    <div className=" FilterSecton_1 ">
      <input id="F/[1]" name="RadioInputs" type="radio" />
      <label className="max-w-[400px] min-w-[190px]" htmlFor="F/[1]">
        <Search DeleteStatus={DeleteStatus} />
      </label>

      <input id="F/[2]" name="RadioInputs" type="radio" />
      <label className="max-w-[160px] min-w-[50px]" htmlFor="F/[2]">
        <CustomSelect
          DeleteStatus={DeleteStatus}
          Options={Options_Category}
          type="SimpleSelect"
          Id="SelectCategorie"
        />
      </label>

      <input id="F/[3]" name="RadioInputs" type="radio" />
      <label className="max-w-[220px] min-w-[50px]" htmlFor="F/[3]">
        <CustomSelect
          DeleteStatus={DeleteStatus}
          Options={Options_Ostad}
          type="MultiSelect"
          Id="SelectOstad"
        />
      </label>

      <input id="F/[4]" name="RadioInputs" type="radio" />
      <label className="max-w-[160px] min-w-[50px]" htmlFor="F/[4]">
        <CustomSelect
          DeleteStatus={DeleteStatus}
          Options={Options_Sort}
          type="SimpleSelect"
          Id="SelectSort"
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
