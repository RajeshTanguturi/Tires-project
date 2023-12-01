import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Header = () => {
  return (
    // <nav>
    //   <h1>TOH</h1>
    //   <main>
    //     <HashLink to="/#home">Home</HashLink>
    //     <HashLink to="/#contact">Contact</HashLink>
    //     {/* <HashLink to="/submit">Submit</HashLink> */}

    //     {/* <HashLink to="/#about">About</HashLink> */}
    //     {/* <HashLink to="/#brands">brands</HashLink> */}
    //     {/* <Link to="/Services">Services</Link> */}
    //   </main>
    // </nav>
    <nav class="navbar  navbar-expand-lg bg-body-tertiary sticky-top ">
      <div class="container-fluid">
        <h3>TOH</h3>
        <h3> </h3>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <HashLink
                  to="/#home"
                  class="nav-link active"
                  aria-current="page"
                >
                  Home
                </HashLink>
              </li>

              <HashLink
                to="/#about"
                class="nav-link active"
                aria-current="page"
              >
                About
              </HashLink>
              <HashLink
                to="/#contact"
                class="nav-link active"
                aria-current="page"
              >
                Contact
              </HashLink>
              {/* <HashLink
                to="/#feedback"
                class="nav-link active"
                aria-current="page"
              >
                Feedback
              </HashLink> */}
              <Link to="/feedback" class="nav-link active" aria-current="page">
                feedback
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
