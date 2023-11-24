import * as React from "react";
import {  render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux"

import Nav from "./Nav";
import reducer from "../reducers";
import middleware from "../middleware";

//const mockStore = configureStore();

describe("Nav", () => {
  it("11a) shows that there are 4 navigation links", () => {
    const store = createStore(reducer, middleware);

    var view = render(
      <Provider store={store}>
        <Router>
          <Nav />
        </Router>
      </Provider>
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const navigationLinks = view.getAllByTestId(/navigation-navlink/);

    expect(navigationLinks).toHaveLength(4);
  });

  it("11b) shows that Home, Leaderboard, New and Logout are available", () => {
    const store = createStore(reducer, middleware);

    var view = render(
      <Provider store={store}>
        <Router>
          <Nav />
        </Router>
      </Provider>
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries, no-undef
    const homeLink = view.getByTestId("navigation-navlink-home");
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const leaderboardLink = view.getByTestId("navigation-navlink-leaderboard");
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const newLink = view.getByTestId("navigation-navlink-new");
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const logoutLink = view.getByTestId("navigation-navlink-logout");

    expect(homeLink).toBeDefined();
    expect(leaderboardLink).toBeDefined();
    expect(newLink).toBeDefined();
    expect(logoutLink).toBeDefined();
  });
});
