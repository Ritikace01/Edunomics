import React, { Component } from "react";
import { Link } from "react-router-dom";

const DashboardNav = () => {
  return (
    <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <a
        class="navbar-brand col-md-3 col-lg-2 mr-0 px-3"
        href="#"
        style={{ marginLeft: "4rem" }}
      >
        Welcome To Edunomics
      </a>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <div class="dropdown">
            <a
              class="btn btn-secondary dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              My Account
            </a>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item" href="#">
                My Profile
              </a>
              <Link class="dropdown-item" to="/">
                LogOut
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default DashboardNav;
