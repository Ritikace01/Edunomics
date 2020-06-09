import React, { Component } from "react";

const BodyCard = () => {
  return (
    <React.Fragment>
      <div className="col d-flex justify-content-center">
        <div
          className="card"
          style={{ width: "20rem", height: "10rem", borderColor: "black" }}
        >
          <div className="card-body">Topics Covered</div>
        </div>
        <div
          className="card"
          style={{
            width: "20rem",
            height: "10rem",
            marginLeft: "3rem",
            borderColor: "black",
          }}
        >
          <div className="card-body">Recent Actvities</div>
        </div>
      </div>
      <div
        className="col d-flex justify-content-center"
        style={{ marginTop: "3rem" }}
      >
        <div
          className="card"
          style={{ width: "50rem", height: "10rem", borderColor: "black" }}
        >
          <div className="card-body">Performance Report</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BodyCard;
