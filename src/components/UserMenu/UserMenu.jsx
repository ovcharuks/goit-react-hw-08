import { NavLink } from "react-router-dom";
import styles from "./UserMenu.module.css";

function UserMenu() {
  return (
    <header className={styles.links}>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div>
        <NavLink to="/contacts">Contacts</NavLink>
      </div>
    </header>
  );
}

export default UserMenu;
