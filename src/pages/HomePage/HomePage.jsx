import { NavLink } from "react-router-dom";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";

function HomePage() {
  return (
    <div>
      <h2>Welcome!</h2>
      <div>
        <NavLink to="/register">
          If you want to create your own contact-list, please register.
        </NavLink>
      </div>
      <div>
        <NavLink to="/login">
          If you already registered, welcome to your application.
        </NavLink>
      </div>
      <div>
        <NavLink to="/contacts">Your contact-list.</NavLink>
      </div>
    </div>
  );
}

export default HomePage;
