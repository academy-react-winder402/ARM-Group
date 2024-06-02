import { View1 } from "./View1.jsx";
import { HeaderBox } from "./HeaderBox.jsx";
function RightSide() {
  return (
    <div className="w-[212px] flex flex-col gap-3">
      <HeaderBox />
      <View1 />
    </div>
  );
}

export { RightSide };
