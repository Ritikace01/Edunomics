import React, { Component } from "react";
import signup from "../images/signup.jpg";
import Form from "../components/form";

class SignUpPage extends Component {
  handleSubmit = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="col d-flex">
        <img
          src={signup}
          style={{ width: "40rem", height: "42rem", marginLeft: "8rem" }}
        />
        <div
          className="card"
          style={{
            margin: "2rem",
            width: "25rem",
            height: "35rem",
            backgroundColor: "#6262EA ",
          }}
        >
          <div className="card-body">
            <Form />
            <button
              onClick={this.handleSubmit}
              type="submit"
              class="btn btn-outline-dark"
              style={{
                borderRadius: "45%",
                marginLeft: "8rem",
                marginTop: "2rem",
                borderColor: "white",
                color: "white",
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpPage;
