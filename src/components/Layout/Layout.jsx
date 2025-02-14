import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import UserMenu from "../UserMenu/UserMenu";

function Layout() {
  return (
    <div>
      <AppBar />
      {/* <UserMenu /> */}
      <Outlet />
    </div>
  );
}
export default Layout;
