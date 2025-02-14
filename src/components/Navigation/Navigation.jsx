import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";

function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div>
      {isLoggedIn && <h2>Welcome, {user.name}</h2>}
      {/* <NavLink to="/"> Home </NavLink> */}
      {isLoggedIn ? (
        <button onClick={() => dispatch(logoutThunk())}>Logout</button>
      ) : // <>
      //   <NavLink to="/register"> Registration </NavLink>
      //   <NavLink to="/login"> Login </NavLink>
      // </>
      null}
    </div>
  );
}

export default Navigation;
