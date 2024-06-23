import { RightSide } from "./RightSide.jsx";
import { Center } from "./Center/Center.jsx";
import { LeftSide } from "./LeftSide.jsx";

function Index() {
  return (
    <div
      className="container mx-auto flex justify-center gap-4 mt-[100px]"
      dir="rtl"
    >
      <div className="hidden md:block">
        <RightSide />
      </div>
      <Center />
      <div className="hidden md:block">
        <LeftSide />
      </div>
    </div>
  );
}

export default Index;
