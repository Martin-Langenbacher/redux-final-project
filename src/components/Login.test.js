import { render, screen } from "@testing-library/react";
//import { render, screen } from "@testing-library/react";
import { createStore } from "redux";
import * as React from "react";
import { MemoryRouter } from "react-router-dom";

import Login from "./Login";
import { Provider } from "react-redux";
import reducer from "../reducers";
import middleware from "../middleware";

describe("Login", () => {
  it("will have all expected fields", () => {
    // // eslint-disable-next-line testing-library/render-result-naming-convention

    //const store = createStore(rootReducer)
    const store = createStore(reducer, middleware);
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );

    /*
    // eslint-disable-next-line testing-library/prefer-screen-queries
    var labels = loginComponent.getAllByText(/name/);
    expect(labels.length).toEqual(2);
    */

    var usernameInput = screen.getByTestId("username-input-field");
    var passwordInput = screen.getByTestId("password-input-field");
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    var loginButton = screen.getByTestId("login-button-exists");
    expect(loginButton).toBeInTheDocument();

    //expect(loginComponent).toMatchSnapshot();
  });
});
