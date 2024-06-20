import Section_1 from "./FilterSection_1";
import Section_2 from "./FilterSection_2";

function FilterCourse() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Section_1 />
      </div>
      <Section_2 />
    </>
  );
}

export { FilterCourse };
