import { RightSide } from "./RightSide.jsx";
import { Center } from "./Center/Center.jsx";
import { LeftSide } from "./LeftSide.jsx";
function index() {
  return (
    <div
      className="w-[1120px] h-[1700px] mx-auto flex gap-4 mt-[100px]"
      dir="rtl"
    >
      <RightSide />
      <Center />
      <LeftSide />
    </div>
  );
}

export default index;
