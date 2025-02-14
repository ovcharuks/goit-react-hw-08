import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

function AppBar() {
  const isLoggedin = useSelector(selectIsLoggedIn);
  return (
    <header>
      <Navigation />
      {isLoggedin ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
export default AppBar;
