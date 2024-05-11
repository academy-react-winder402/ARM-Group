import { Outlet } from "react-router-dom";
//import Dashbord_LayOut from "../../Components/Dashbord";
import MenuBar from "../../Components/Dashbord/MenuBar/MenuBar";
import Comments from "../../Components/Dashbord/Comments_Section";

function Dashbord() {
  return (
    <div className="w-full h-[93.1vh]">
      <div className="flex justify-between w-[1120px] h-[575px] m-auto mt-[57px]">
        <Comments />
        <Outlet />
        <MenuBar />
      </div>
    </div>
  );
}

export default Dashbord;
