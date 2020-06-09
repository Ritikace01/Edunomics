import React, { Component } from "react";

const Nav = () => {
  return (
    <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <a
        class="navbar-brand col-md-3 col-lg-2 mr-0 px-3"
        href="#"
        style={{ marginLeft: "4rem" }}
      >
        Welcome To Edunomics
      </a>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Select Class
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <button
            class="btn btn-light dropdown-toggle dropdown-toggle-split"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="sr-only">XIth class</span>
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">
              Physics
            </a>
            <a class="dropdown-item" href="#">
              Maths
            </a>
          </div>
          <button
            class="btn btn-light dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            XIIth Class
          </button>
        </div>
      </div>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#" style={{ marginRight: "4rem" }}>
            My Account
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
