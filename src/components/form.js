import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form>
        <div class="form-group">
          <label for="exampleInputName1">
            <p style={{ color: "white" }}>Name</p>
          </label>
          <input type="name" class="form-control" id="exampleInputName1" />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">
            <p style={{ color: "white" }}>Email Address</p>
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">
            <p style={{ color: "white" }}>Password</p>
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputContact1">
            <p style={{ color: "white" }}>Contact</p>
          </label>
          <input
            type="contact"
            class="form-control"
            id="exampleInputContact1"
          />
        </div>
      </form>
    );
  }
}

export default Form;
