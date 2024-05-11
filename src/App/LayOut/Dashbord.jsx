/* eslint-disable react/prop-types */
import MenuBar from "../../Components/Dashbord/MenuBar/MenuBar";
import Pagination from "../../Components/Common/Pagination";

function Dashbord({ children }) {
  return (
    <div className="w-full h-[93.1vh]">
      <div className="flex justify-between w-[1120px] h-[575px] m-auto mt-[57px] relative">
        <Pagination />
        {children}
        <MenuBar />
      </div>
    </div>
  );
}

export default Dashbord;
