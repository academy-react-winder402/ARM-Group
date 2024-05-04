import PriceFilter from "./FilterSection_1/PriceFilter";
import Search from "./FilterSection_1/Search";
import SelectCategorie from "./FilterSection_1/SelectCategorie";
import SelectSort from "./FilterSection_1/SelectSort";

function FilterCourse() {
  return (
    <div className=" FilterSecton_1 ">
      <input id="F/[1]" name="RadioInputs" type="radio" />
      <label htmlFor="F/[1]">
        <Search />
      </label>

      <input id="F/[2]" name="RadioInputs" type="radio" />
      <label htmlFor="F/[2]">
        <SelectCategorie />
      </label>

      <input id="F/[3]" name="RadioInputs" type="radio" />
      <label htmlFor="F/[3]">3</label>

      <input id="F/[4]" name="RadioInputs" type="radio" />
      <label htmlFor="F/[4]">
        <SelectSort />
      </label>

      <input id="F/[5]" name="RadioInputs" type="radio" />
      <label htmlFor="F/[5]">
        <PriceFilter />
      </label>
    </div>
  );
}

export { FilterCourse };
