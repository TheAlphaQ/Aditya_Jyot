import React from "react";

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fs-2">
        <div className="container-fluid">
          <div className="navbar-brand fs-2" href="#">
            Logo
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item px-lg-3">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="Level_1Homepage.html"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
