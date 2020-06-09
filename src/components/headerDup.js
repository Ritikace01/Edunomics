import React, { Component } from "react";
import { Link } from "react-router-dom";

const HeaderDuplicate = () => {
  return (
    <div
      class="jumbotron jumbotron-fluid Jumbotron-image"
      style={{ height: "30rem", padding: "2rem 2rem" }}
    >
      <div className="col d-flex">
        <div class="container">
          <h5>Welcome To Edunomics</h5>
        </div>
        <div
          className="container"
          style={{ marginBottom: "6rem", textAlign: "right" }}
        >
          <button
            type="button"
            className="btn btn-outline-secondary"
            style={{ borderRadius: "45%" }}
          >
            Login
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary"
            style={{ borderRadius: "45%", marginLeft: "2rem" }}
          >
            <Link to="/signup-page">SignUp</Link>
          </button>
        </div>
      </div>
      <div className="col d-flex">
        <div
          className="container"
          style={{
            textAlign: "center",
            maxWidth: "500px",
            marginRight: "0rem",
            marginLeft: "25rem",
          }}
        >
          <h1 className="font-weight-bold">WHERE DO YOU WANT TO GO TODAY</h1>
          <h5>Share your ultimate travel bucket list with us</h5>
        </div>
        <div className="card" style={{ height: "18rem", marginLeft: "10rem" }}>
          <div className="card-body">
            <form>
              <div class="form-group" style={{ height: "4rem" }}>
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <button class="btn btn-primary">
                <Link to="/dashboard" style={{ color: "white" }}>
                  Submit
                </Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDuplicate;
