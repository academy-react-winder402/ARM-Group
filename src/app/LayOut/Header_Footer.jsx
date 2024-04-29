import { Outlet } from "react-router-dom";
import MainHeader from "../../Components/Common/MainHeader/MainHeader";
import MainFooter from "../../Components/Common/Footer/MainFooter";

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
