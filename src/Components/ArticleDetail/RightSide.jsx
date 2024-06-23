import { ViewRight } from "./ViewRight.jsx";
import { HeaderBox } from "./HeaderBox.jsx";
function RightSide() {
  return (
    <div className="w-[212px] flex flex-col gap-3">
      <HeaderBox title="عناوین دوم" />
      <ViewRight />
    </div>
  );
}

export { RightSide };
