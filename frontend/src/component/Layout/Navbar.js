import React from "react";
import { Link } from "react-router-dom";
import { signout } from "../auth/auth";
import { useHistory } from "react-router-dom";
import { FaCreativeCommonsSampling } from "react-icons/fa";
import { isAuth } from "../auth/auth";

const Navbar = () => {
  let history = useHistory();
  return (
    <div className="pb-1">
      <nav className="navbar bg-dark navbar-expand-xl container-fluid-lg">
        <Link className="navbar-brand" to="/">
          <FaCreativeCommonsSampling width="200px" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {!isAuth() && (
              <li className="nav-item m-3">
                <Link className="btn btn-md mt-lg-2" to="/register">
                  Register
                </Link>
              </li>
            )}
            {!isAuth() && (
              <li className="nav-item m-3">
                <Link className="btn btn-md mt-lg-2" to="/login">
                  Login
                </Link>
              </li>
            )}
            {isAuth() && (
              <li>
                <button
                  className="btn btn-md mt-4"
                  onClick={() =>
                    signout(() => {
                      history.push("/login");
                      window.location.reload();
                    })
                  }
                >
                  Sign Out
                </button>
              </li>
            )}
            {isAuth() && (
              <li className="nav-item m-3">
                <Link className="btn btn-md mt-lg-2" to="/dashboard">
                  Dashboard
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
