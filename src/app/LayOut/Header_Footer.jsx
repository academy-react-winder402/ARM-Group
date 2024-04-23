import { Outlet } from "react-router-dom";
import MainHeader from "../../Components/common/MainHeader/MainHeader";
import MainFooter from "../../Components/common/Footer/MainFooter";

function Header() {
  return (
    <>
      <MainHeader />
      <Outlet />
      <MainFooter />
    </>
  );
}

export default Header;
