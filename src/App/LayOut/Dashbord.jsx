/* eslint-disable react/prop-types */
import MenuBar from "../../Components/Dashbord/MenuBar/MenuBar";

function Dashbord({ children }) {
  return (
    <div className="mt-[80px] flex justify-between w-[1120px] h-[575px] m-auto relative">
      {children}
      <MenuBar />
    </div>
  );
}

export default Dashbord;
