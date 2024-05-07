/* filter 1 */
import PriceFilter from "./FilterSection_1/PriceFilter";
import Search from "./FilterSection_1/Search";
import SelectCategorie from "./FilterSection_1/SelectCategorie";
import SelectSort from "./FilterSection_1/SelectSort";
import SelectOstad from "./FilterSection_1/SelectOstad";

/* filter 2 */
import ViewSelect from "./FilterSection_2/ViewSelect";

function FilterCourse() {
  return (
    <>
      <div className=" FilterSecton_1 ">
        <input id="F/[1]" name="RadioInputs" type="radio" />
        <label className="max-w-[400px] min-w-[200px]" htmlFor="F/[1]">
          <Search />
        </label>

        <input id="F/[2]" name="RadioInputs" type="radio" />
        <label className="max-w-[250px] min-w-[50px]" htmlFor="F/[2]">
          <SelectCategorie />
        </label>

        <input id="F/[3]" name="RadioInputs" type="radio" />
        <label className="max-w-[250px] min-w-[50px]" htmlFor="F/[3]">
          <SelectOstad />
        </label>

        <input id="F/[4]" name="RadioInputs" type="radio" />
        <label className="max-w-[250px] min-w-[50px]" htmlFor="F/[4]">
          <SelectSort />
        </label>

        <input id="F/[5]" name="RadioInputs" type="radio" />
        <label className="max-w-[400px] min-w-[300px]" htmlFor="F/[5]">
          <PriceFilter />
        </label>
      </div>

      <div className=" FilterSecton_2 ">
        <div className="flex-grow-[6] ">items 1</div>
        <div className="flex-grow-[10]">items 2</div>
        <div className="flex-grow-[1] CostumButtFilter"></div>
        <div className="flex-grow-[1] CostumButtFilter"></div>
        <div className="flex-grow-[1] CostumButtFilter">
          <ViewSelect />
        </div>
      </div>
    </>
  );
}

export { FilterCourse };
