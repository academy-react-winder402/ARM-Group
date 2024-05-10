import { useState } from "react";
import CustomSelect from "../../Common/FilterSelectOption";
import Search from "../../Common/Search";

function Index() {
  const [Options_Category] = useState([
    { value: "0", innerHTML: "همه", defaultHTML: "دسته بندی" },
    { value: "1", innerHTML: "مورد قابل انتخاب 1" },
    { value: "2", innerHTML: "مورد قابل انتخاب 2" },
    { value: "3", innerHTML: "مورد قابل انتخاب 3" },
  ]);
  const [Options_Sort] = useState([
    { value: "0", innerHTML: "همه", defaultHTML: "مرتب سازی" },
    { value: "1", innerHTML: "مورد قابل انتخاب 1" },
    { value: "2", innerHTML: "مورد قابل انتخاب 2" },
    { value: "3", innerHTML: "مورد قابل انتخاب 3" },
  ]);
  const [Options_Page] = useState([
    { value: "0", innerHTML: "۲۴", defaultHTML: "۲۴" },
    { value: "1", innerHTML: "۱۲" },
    { value: "2", innerHTML: "۸" },
  ]);
  return (
    <div className="FilterSecton_1">
      <input id="F/[1]" name="RadioInputs" type="radio" />
      <label className="min-w-[200px] " htmlFor="F/[1]">
        <Search />
      </label>

      <input id="F/[2]" name="RadioInputs" type="radio" />
      <label className="min-w-[120px] max-w-[235px]" htmlFor="F/[2]">
        <CustomSelect
          Options={Options_Category}
          type="SimpleSelect"
          Id="SelectCategorie"
        />
      </label>

      <input id="F/[3]" name="RadioInputs" type="radio" />
      <label className="min-w-[120px] max-w-[235px] " htmlFor="F/[3]">
        <CustomSelect
          Options={Options_Sort}
          type="SimpleSelect"
          Id="SelectSort"
        />
      </label>

      <input id="F/[4]" name="RadioInputs" type="radio" />
      <label className="min-w-[87px] max-w-[87px]" htmlFor="F/[4]">
        <CustomSelect
          Options={Options_Page}
          type="SimpleSelect"
          Id="SelectCardInPage"
        />
      </label>
    </div>
  );
}

export default Index;
