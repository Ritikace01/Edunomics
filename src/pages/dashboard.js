import React, { Component } from "react";
import DashboardCard from "../components/dashboardCard";
import BodyCard from "../components/bodyCard";
import DownloadCard from "../components/downloadCard";
import DashboardNav from "../components/dashboardNav";
import Nav from "../components/nav";

class Dashboard extends Component {
  state = {
    activeView: "default",
    navView: "default",
  };

  handleDownload = () => {
    this.setState({ activeView: "downloadClicked" });
  };

  handleHome = () => {
    this.setState({ activeView: "default" });
  };

  handleSessions = () => {
    this.setState({ navView: "sessionClicked" });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.navView === "default" && <DashboardNav />}
        {this.state.navView === "sessionClicked" && <Nav />}

        <div class="container-fluid">
          <div class="row">
            <nav
              id="sidebarMenu"
              class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
            >
              <div class="sidebar-sticky pt-3">
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <a class="nav-link active" onClick={this.handleHome}>
                      <span data-feather="home"></span>
                      Home <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" onClick={this.handleSessions}>
                      <span data-feather="file"></span>
                      Sessions
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" onClick={this.handleDownload}>
                      <span data-feather="shopping-cart"></span>
                      Downloads
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <span data-feather="users"></span>
                      Settings
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <span data-feather="bar-chart-2"></span>
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            <main
              role="main"
              class="col-md-9 ml-sm-auto col-lg-10 md-4"
              style={{ padding: "0" }}
            >
              {this.state.activeView === "default" && (
                <div>
                  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-3 mb-3 border-bottom">
                    <DashboardCard />
                  </div>
                  <BodyCard />
                </div>
              )}
              {this.state.activeView === "downloadClicked" && (
                <div>
                  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-3 mb-3 border-bottom">
                    <DownloadCard />
                  </div>
                  <BodyCard />
                </div>
              )}
            </main>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;

{
  /* <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" style={{ marginLeft: "4rem" }}>
          Welcome to Edunomics
        </a>
        <form class="form-inline">
          <button
            class="btn btn-outline-success my-2 my-sm-0"
            style={{ marginRight: "4rem" }}
          >
            My Account
          </button>
        </form>
      </nav> */
}
