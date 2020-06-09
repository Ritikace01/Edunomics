import React, { Component } from "react";
import book from "../images/book.jpg";

class Body extends Component {
  render() {
    let classes = "fa fa-facebook";

    return (
      <React.Fragment>
        <div className="col d-flex justify-content-center">
          <div
            className="card border-0"
            style={{ width: "75rem", height: "25rem" }}
          >
            <div className="card-body">
              <h3 className="card-title font-weight-bold">
                Special title treatment
              </h3>
              <p className="card-text">
                A card is a flexible and extensible content container. It
                includes options for headers and footers, a wide variety of
                content, contextual background colors, and powerful display
                options. If you’re familiar with Bootstrap 3, cards replace our
                old panels, wells, and thumbnails. Similar functionality to
                those components is available as modifier classes for cards.
              </p>
              <p className="card-text">
                Cards are built with as little markup and styles as possible,
                but still manage to deliver a ton of control and customization.
                Built with flexbox, they offer easy alignment and mix well with
                other Bootstrap components. They have no margin by default, so
                use spacing utilities as needed. Below is an example of a basic
                card with mixed content and a fixed width. Cards have no fixed
                width to start, so they’ll naturally fill the full width of its
                parent element. This is easily customized with our various
                sizing options.
              </p>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        <div className="col d-flex justify-content-center">
          <img src={book} style={{ width: "75rem", height: "25rem" }} />
        </div>
        <div className="col d-flex justify-content-center">
          <div
            className="card border-0"
            style={{ width: "75rem", height: "25rem" }}
          >
            <div className="card-body">
              <p className="card-text">
                A card is a flexible and extensible content container. It
                includes options for headers and footers, a wide variety of
                content, contextual background colors, and powerful display
                options. If you’re familiar with Bootstrap 3, cards replace our
                old panels, wells, and thumbnails. Similar functionality to
                those components is available as modifier classes for cards.
              </p>
              <p className="card-text">
                Cards are built with as little markup and styles as possible,
                but still manage to deliver a ton of control and customization.
                Built with flexbox, they offer easy alignment and mix well with
                other Bootstrap components. They have no margin by default, so
                use spacing utilities as needed. Below is an example of a basic
                card with mixed content and a fixed width. Cards have no fixed
                width to start, so they’ll naturally fill the full width of its
                parent element. This is easily customized with our various
                sizing options.
              </p>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        <div
          class="jumbotron jumbotron-fluid Jumbotron-image"
          style={{
            height: "25rem",
            marginBottom: "0rem",
            backgroundColor: "#373739  ",
            alignItems: "center",
          }}
        >
          <div class="container" style={{ textAlign: "center" }}>
            <h5 class="display-4" style={{ color: "aliceblue" }}>
              EDUNOMICS
            </h5>
            <p style={{ color: "aliceblue" }}>contact@edunomics.in</p>
            <div
              className="col d-flex"
              style={{ marginTop: "3rem", textAlign: "center" }}
            >
              <i className={classes} aria-hidden="true" />
            </div>
            <div
              className="col d-flex"
              style={{ marginTop: "6rem", textAlign: "center" }}
            >
              <h1 style={{ color: "white" }}>
                JOIN | COOKIE POLICY | TERM OF USE | PRIVACY POLICY
              </h1>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Body;
