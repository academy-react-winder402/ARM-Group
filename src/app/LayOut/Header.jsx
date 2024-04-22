import { Outlet } from "react-router-dom";
import MainHeader from "../../Components/common/MainHeader/MainHeader";

function Header() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default Header;
