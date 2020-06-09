import React, { Component } from "react";
import book from "../images/book.jpg";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div
        class="jumbotron jumbotron-fluid Jumbotron-image"
        style={{ height: "30rem" }}
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
              onClick={this.props.onLoginClick}
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
        <div className="container" style={{ textAlign: "center" }}>
          <h1 className="font-weight-bold">WHERE DO YOU WANT TO GO TODAY</h1>
          <h5>Share your ultimate travel bucket list with us</h5>
        </div>
      </div>
    );
  }
}

export default Header;
