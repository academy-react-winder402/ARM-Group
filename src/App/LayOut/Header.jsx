import { Outlet } from "react-router-dom";
import MainHeader from "../../Components/Common/MainHeader/MainHeader";
// hgcjdhcv
function Header() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default Header;
