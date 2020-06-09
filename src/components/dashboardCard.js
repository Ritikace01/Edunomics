import React, { Component } from "react";
import study from "../images/study.png";

const DashboardCard = () => {
  return (
    <React.Fragment>
      <div
        className="card"
        style={{
          width: "80rem",
          backgroundColor: "#69C3C2",
          alignItems: "center",
        }}
      >
        <div className="card-body">
          <div className="col d-flex" style={{ marginTop: "2rem" }}>
            <div class="card" style={{ width: "20rem", height: "8rem" }}>
              <div class="card-body">
                <img src={study} />
                All interactive sessions
              </div>
            </div>
            <div
              class="card"
              style={{ marginLeft: "2rem", width: "20rem", height: "8rem" }}
            >
              <div class="card-body">
                <img src={study} />
                Practice questions
              </div>
            </div>
          </div>
          <div className="col d-flex" style={{ marginTop: "2rem" }}>
            <div class="card" style={{ width: "20rem", height: "8rem" }}>
              <div class="card-body">
                <img src={study} />
                Downloads
              </div>
            </div>
            <div
              class="card"
              style={{ marginLeft: "2rem", width: "20rem", height: "8rem" }}
            >
              <div class="card-body">
                <img src={study} />
                Ask questions
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DashboardCard;
