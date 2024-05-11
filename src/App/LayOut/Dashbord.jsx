/* eslint-disable react/prop-types */
import MenuBar from "../../Components/Dashbord/MenuBar/MenuBar";
import Pagination from "../../Components/Common/Pagination";

function Dashbord({ children }) {
  return (
    <div className="mt-[100px] flex justify-between w-[1120px] h-[575px] m-auto relative">
      <Pagination />
      {children}
      <MenuBar />
    </div>
  );
}

export default Dashbord;
