import React from "react";

const Header = () => {
  return (
    <div className="content-manager ">
      <header
        style={{
          background: "#ffffff",
          display: "flex",
          justifyContent: "space-between",
        }}
        className=" py-2 mt-2 shadow  ps-4"
      >
        <div className="header_left">
          <h3>
            Welcome , <span>Dogde Admin</span>
          </h3>
        </div>
        <div className="header_right me-5">
          <ul className="list-unstyled">
            <li className="nav-item dropdown mt-1" style={{ border: "none" }}>
              <a
                className="nav-link dropdown-toggle text-dark text-decoration-none"
                href="/"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="ms-2">
                  <i className="fas fa-user"></i> My Profile
                </li>
                <li className="ms-2">
                  <i className="fas fa-user-cog"></i> Account Setting
                </li>

                <li className="ms-2">
                  <i className="fas fa-sign-out-alt"></i>
                  Logout
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
