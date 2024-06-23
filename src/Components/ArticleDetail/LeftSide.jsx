import { ViewLeft } from "./ViewLeft.jsx";
import { HeaderBox } from "./HeaderBox.jsx";
function LeftSide() {
  return (
    <div className="w-[212px] flex flex-col gap-4">
      <HeaderBox title="عناوین اول" />
      <ViewLeft />
    </div>
  );
}

export { LeftSide };
