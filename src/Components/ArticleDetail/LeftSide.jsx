import { View1 } from "./View1.jsx";
import { HeaderBox } from "./HeaderBox.jsx";
function LeftSide() {
  return (
    <div className="w-[212px] flex flex-col gap-4">
      <HeaderBox />
      <View1 />
      <View1 />
      <View1 />
    </div>
  );
}

export { LeftSide };
