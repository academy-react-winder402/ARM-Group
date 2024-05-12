import { Header } from "../Articless/Suggest/Header.jsx";
import { View1 } from "./View1.jsx";
import { HeaderBox } from "./HeaderBox.jsx";
import { RightDetail } from "./RightDetail.jsx";
function RightSide() {
  return (
    <div className="w-[212px] flex flex-col gap-3">
      {/* <div className="h-[470px] pr-3 border">
        <Header
          textSize="text-base text-textColor mb-[-10px]"
          title="یه عنوان"
        />
        <RightDetail />
      </div> */}

      <HeaderBox />
      <View1 />
    </div>
  );
}

export { RightSide };
