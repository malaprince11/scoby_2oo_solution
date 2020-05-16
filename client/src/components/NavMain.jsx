import React from "react";
import { NavLink } from "react-router-dom";
import withUser from "../components/Auth/withUser";
import "../styles/NavMain.css";

const NavMain = (props) => {
  const { context, toggleFormDisplay } = props;
  return (
    <nav className="NavMain">
      <NavLink exact to="/">
        <h3>Scoby 2oo</h3>
      </NavLink>
      <ul>
        {context.isLoggedIn && (
          <React.Fragment>
            <li>
              <p onClick={toggleFormDisplay}>Add Item</p>
            </li>
            <li>
              <NavLink to="/profile">
                {context.user && context.user.firstName}
              </NavLink>
            </li>
            <li>
              <p onClick={context.logout}>Logout</p>
            </li>
          </React.Fragment>
        )}
        {!context.isLoggedIn && (
          <React.Fragment>
            <li>
              <NavLink to="/signin">Log in</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Create account</NavLink>
            </li>
          </React.Fragment>
        )}
      </ul>
    </nav>
  );
};

export default withUser(NavMain);