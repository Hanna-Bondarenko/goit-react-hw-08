import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { buildLinkClass } from "../../util/function";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn); // Перевіряємо стан авторизації

  return (
    <nav>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <>
          <NavLink className={buildLinkClass} to="/contacts">
            Contacts
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Navigation;
